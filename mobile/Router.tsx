import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigationBar from "./src/layout/BottomNavigationBar";
import Cards from "./src/screens/Cards";
import { LightTheme } from "./src/styles/theme";
import { RootStackParamList } from "./src/types/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = {
  Main: {
    component: BottomNavigationBar,
    options: { headerShown: false }
  },
  Cards: {
    component: Cards
  }
};

const Router = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator>
        {Object.entries(routes).map(([name, screen]) => (
          <Stack.Screen
            key={name}
            name={name as keyof RootStackParamList}
            {...screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
