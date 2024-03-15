import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import { card } from "types/generated";
import { fontPixel, fontSize } from "utils/font-size-helper";

interface CardsListProps {
  list: card[];
}

const Card = ({ card }: { card: card }) => {
  const cardNumberStyles = [styles.cardNumberDot, commonStyles.fontHelvetica];

  return (
    <View
      style={[
        styles.card,
        commonStyles.cardShadow,
        commonStyles.cardBorderRadius
      ]}
    >
      <Image source={require("images/visa.png")} />

      <View style={styles.cardNumberContainer}>
        <Text style={cardNumberStyles}>••••</Text>
        <Text style={cardNumberStyles}>••••</Text>
        <Text style={cardNumberStyles}>••••</Text>

        <Text style={[styles.cardLastDigits, commonStyles.defaultFont]}>
          {card.last_digits}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.description, commonStyles.defaultFont]}>
          Name on Card
        </Text>
        <Text style={[styles.description, commonStyles.defaultFont]}>
          Expires
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.cardInfo, commonStyles.defaultFont]}>
          {card.name}
        </Text>
        <Text style={[styles.cardInfo, commonStyles.defaultFont]}>
          {`${card.expiration_month}/${(card.expiration_year as number) % 100}`}
        </Text>
      </View>
    </View>
  );
};

const CardsList = ({ list }: CardsListProps) => {
  return (
    <FlatList
      data={list}
      style={[commonStyles.flex]}
      contentContainerStyle={[
        commonStyles.screenVerticalPadding,
        commonStyles.screenHorizontalPadding
      ]}
      keyExtractor={(item) => item.id as string}
      renderItem={({ item }) => <Card card={item} />}
    />
  );
};

export default CardsList;

const styles = StyleSheet.create({
  card: {
    paddingTop: 32,
    paddingBottom: 22,
    paddingLeft: 30,
    paddingRight: 71,

    gap: 15
  },
  cardNumberContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardNumberDot: {
    fontSize: fontPixel(24.5),
    opacity: 0.5
  },
  cardLastDigits: {
    fontSize: fontSize.small,
    color: Colors.GRAY
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    fontSize: fontPixel(10),
    color: Colors.LIGHT_GRAY
  },
  cardInfo: {
    fontSize: fontSize.mini
  }
});
