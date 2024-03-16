import "./src/sheets";

import { useCallback, useState } from "react";
import { SheetProvider } from "react-native-actions-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { OmiseProvider } from "./src/contexts/OmiseProvider";
import { ReactQueryClientProvider } from "./src/contexts/ReactQueryProvider";
import { LightTheme } from "./src/styles/theme";
import Router from "./Router";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "FC-Subject-Rounded-Regular": require("./assets/fonts/FC-Subject-Rounded-Regular.ttf"),
    "FC-Subject-Rounded-Bold": require("./assets/fonts/FC-Subject-Rounded-Bold.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf")
  });

  const [customerId, setCustomerId] = useState<null | string>(null);

  const onLayoutRootView = useCallback(async () => {
    const initialCustomerId = await AsyncStorage.getItem("customerId");
    setCustomerId(initialCustomerId);

    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ReactQueryClientProvider>
      <OmiseProvider
        customerId={customerId}
        setCustomerId={setCustomerId}
      >
        <SafeAreaProvider
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <NavigationContainer theme={LightTheme}>
            <SheetProvider>
              <Router />
              <Toast />
            </SheetProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </OmiseProvider>
    </ReactQueryClientProvider>
  );
}
