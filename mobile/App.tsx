import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { commonStyles } from "./src/styles/common";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "FC-Subject-Rounded-Regular": require("./assets/fonts/FC-Subject-Rounded-Regular.ttf"),
    "FC-Subject-Rounded-Bold": require("./assets/fonts/FC-Subject-Rounded-Bold.ttf")
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
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <Text style={[commonStyles.defaultFont]}>Hey, there!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
