import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useNavigation } from "@react-navigation/native";
import { useOmise } from "contexts/OmiseProvider";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { NavigationProps } from "types/screens";
import { fontPixel, fontSize } from "utils/font-size-helper";

const CardsEmptyStatement = () => {
  const navigation = useNavigation<NavigationProps>();

  const { customer } = useOmise();

  const handleAddNewCard = () => {
    if (customer) {
      navigation.navigate("AddCard");
    } else {
      SheetManager.show("CreateCustomerSheet");
    }
  };

  return (
    <View style={styles.textContainer}>
      <Text style={styles.cardEmoji}>💳</Text>
      <Text style={styles.text}>No Cards Found</Text>
      <Text style={styles.text}>
        We recommend adding a card for easy payment
      </Text>

      <TouchableOpacity onPress={handleAddNewCard}>
        <Text style={styles.actionText}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    ...commonStyles.defaultFont,
    fontSize: fontSize.medium,
    textAlign: "center"
  },
  actionText: {
    ...commonStyles.defaultFontBold,
    color: Colors.PRIMARY,
    fontSize: fontSize.medium
  }
});

export default CardsEmptyStatement;
