import { StatusBar, StyleSheet } from "react-native";

import { Colors } from "./colors";

export const commonStyles = StyleSheet.create({
  defaultFont: {
    fontFamily: "FC-Subject-Rounded-Regular"
  },
  defaultFontBold: {
    fontFamily: "FC-Subject-Rounded-Bold"
  },
  fontHelvetica: {
    fontFamily: "Helvetica"
  },
  flex: {
    flex: 1
  },
  screenHorizontalPadding: {
    paddingHorizontal: 20
  },
  screenVerticalPadding: {
    paddingVertical: 14
  },
  cardShadow: {
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 5 // This is for Android, as it doesn't support shadow properties
  },
  cardBorderRadius: {
    borderRadius: 13
  }
});
