import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { OmiseProvider } from "./src/contexts/OmiseProvider";
import { ReactQueryClientProvider } from "./src/contexts/ReactQueryProvider";
import Router from "./Router";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "FC-Subject-Rounded-Regular": require("./assets/fonts/FC-Subject-Rounded-Regular.ttf"),
    "FC-Subject-Rounded-Bold": require("./assets/fonts/FC-Subject-Rounded-Bold.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ReactQueryClientProvider>
      <OmiseProvider>
        <SafeAreaProvider
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <Router />
        </SafeAreaProvider>
      </OmiseProvider>
    </ReactQueryClientProvider>
  );
}
