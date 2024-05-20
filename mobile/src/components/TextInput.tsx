import React from "react";
import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { fontPixel, fontSize } from "utils/font-size-helper";

interface TextInputProps
  extends Omit<React.ComponentProps<typeof RNTextInput>, "style"> {
  label?: string;
  error?: string;
}

const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        {...props}
        style={styles.input}
        placeholderTextColor={Colors.PALE}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8
  },
  label: {
    ...commonStyles.defaultFont,
    fontSize: fontSize.small
  },
  input: {
    ...commonStyles.defaultFont,
    fontSize: fontPixel(16),

    borderWidth: 1.5,
    borderColor: Colors.LIGHT_PALE,
    borderRadius: 5,

    paddingVertical: 17,
    paddingHorizontal: 16
  },
  errorText: {
    color: Colors.ERROR,
    fontSize: fontSize.mini,
    marginTop: 4
  }
});
