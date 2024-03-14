import { StyleSheet } from "react-native";

import { Colors } from "./colors";

export const commonStyles = StyleSheet.create({
  defaultFont: {
    fontFamily: "FC-Subject-Rounded-Regular"
  },
  defaultFontBold: {
    fontFamily: "FC-Subject-Rounded-Bold"
  },
  defaultHorizontalPadding: {
    paddingHorizontal: 21.5
  },
  defaultShadow: {
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
  borderRadius: {
    borderRadius: 13
  }
});
