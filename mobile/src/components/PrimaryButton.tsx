import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { fontPixel } from "utils/font-size-helper";

interface PrimaryButtonProps
  extends Pick<
    React.ComponentProps<typeof TouchableHighlight>,
    "onPress" | "disabled" | "style"
  > {
  title: string;
  loading?: boolean;
}

const PrimaryButton = ({
  onPress,
  disabled,
  title,
  loading,
  style
}: PrimaryButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 13,
      paddingBottom: 10,
      paddingHorizontal: 18,
      borderRadius: 22.5,
      backgroundColor: Colors.PRIMARY,
      opacity: disabled ? 0.6 : 1
    },
    text: {
      ...commonStyles.defaultFontBold,
      fontSize: fontPixel(16),
      lineHeight: 22.4,
      letterSpacing: 0.1,
      color: Colors.WHITE
    }
  });

  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={Colors.PALE}
      disabled={disabled || loading}
      touchSoundDisabled
      onPress={onPress}
    >
      <>
        {loading && <ActivityIndicator color={Colors.WHITE} />}

        <Text style={styles.text}>{title}</Text>
      </>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
