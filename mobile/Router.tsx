import React from "react";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon, PlusIcon } from "react-native-heroicons/outline";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigationBar from "./src/layout/BottomNavigationBar";
import AddCard from "./src/screens/AddCard";
import Cards from "./src/screens/Cards";
import { Colors } from "./src/styles/colors";
import { commonStyles } from "./src/styles/common";
import { RootStackParamList } from "./src/types/screens";
import { fontPixel } from "./src/utils/font-size-helper";

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
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon
                size={23}
                color={Colors.BLACK}
                strokeWidth={2.3}
              />
            </TouchableOpacity>
          ) : null,
        headerRight: () =>
          route.name === "Cards" ? (
            <TouchableOpacity onPress={() => navigation.navigate("AddCard")}>
              <PlusIcon
                size={23}
                color={Colors.BLACK}
                strokeWidth={2.3}
              />
            </TouchableOpacity>
          ) : null,
        headerTitleStyle: {
          ...commonStyles.defaultFontBold,
          fontSize: fontPixel(17)
        },
        headerShadowVisible: false,
        contentStyle: {
          paddingTop: 17,
          paddingBottom: route.name !== "Main" ? 17 : 0
        }
      })}
    >
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
