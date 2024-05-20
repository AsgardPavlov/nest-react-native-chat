import {
  ChatBubbleLeftRightIcon,
  HomeIcon
} from "react-native-heroicons/outline";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import Chats from "screens/Chats";
import Home from "screens/Home";
import { Colors } from "styles/colors";
import { RootStackParamList } from "types/screens";
import { fontPixel } from "utils/font-size-helper";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigationBar = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: Colors.GRAY,
        tabBarLabelStyle: {
          fontSize: fontPixel(13)
        },
        tabBarStyle: {
          paddingTop: 4
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon
              color={color}
              size={size}
              strokeWidth={focused ? 1.7 : 1.2}
            />
          )
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          title: "Chat",
          tabBarIcon: ({ color, size, focused }) => (
            <ChatBubbleLeftRightIcon
              color={color}
              size={size}
              strokeWidth={focused ? 1.7 : 1.2}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
