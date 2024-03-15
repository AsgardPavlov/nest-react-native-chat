import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigationBar from "./src/layout/BottomNavigationBar";
import AddCard from "./src/screens/AddCard";
import Cards from "./src/screens/Cards";
import { RootStackParamList } from "./src/types/screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = {
  Main: {
    component: BottomNavigationBar,
    options: { headerShown: false }
  },
  Cards: {
    component: Cards
  },
  AddCard: {
    component: AddCard,
    options: {
      headerTitle: ""
    }
  }
};

const Router = () => {
  return (
    <Stack.Navigator>
      {Object.entries(routes).map(([name, screen]) => (
        <Stack.Screen
          key={name}
          name={name as keyof RootStackParamList}
          {...screen}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Router;
