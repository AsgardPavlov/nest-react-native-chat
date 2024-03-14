import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { fontPixel, fontSize } from "utils/font-size-helper";

const CardsEmptyStatement = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.cardEmoji}>💳</Text>
      <Text style={styles.text}>No Cards Found</Text>
      <Text style={styles.text}>
        We recommend adding a card for easy payment
      </Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.actionText}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardsEmptyStatement;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 244
  },
  cardEmoji: {
    fontSize: fontPixel(40)
  },
  text: {
    fontSize: fontSize.medium,
    textAlign: "center"
  },
  actionText: {
    ...commonStyles.defaultFontBold,
    color: Colors.PRIMARY,
    fontSize: fontSize.medium
  }
});
