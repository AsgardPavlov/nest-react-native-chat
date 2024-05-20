import * as React from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { commonStyles } from "styles/common";

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export default function ScreenWrapper({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  ...rest
}: Props) {
  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    {
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  ];

  return (
    <>
      {withScrollView ? (
        <ScrollView
          {...rest}
          contentContainerStyle={[
            { flexGrow: 1 },
            contentContainerStyle,
            commonStyles.screenHorizontalPadding
          ]}
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
          // showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[containerStyle, commonStyles.screenHorizontalPadding, style]}
        >
          {children}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
