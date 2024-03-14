import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import { LightTheme } from "./src/styles/theme";

const Stack = createNativeStackNavigator();

const routes = {
  Home: {
    component: Home,
    options: { headerShown: false }
  }
};

const Router = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator>
        {Object.entries(routes).map(([name, screen]) => (
          <Stack.Screen
            key={name}
            name={name}
            {...screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
