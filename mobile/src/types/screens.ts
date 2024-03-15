import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Chats: undefined;
  Cards: undefined;
  AddCard: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
