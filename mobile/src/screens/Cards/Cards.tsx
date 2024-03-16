import { ActivityIndicator, StyleSheet } from "react-native";
import ScreenWrapper from "components/ScreenWrapper";
import { useOmise } from "contexts/OmiseProvider";
import { card } from "types/generated";

import { Colors } from "../../styles/colors";

import CardsEmptyStatement from "./components/CardsEmptyStatement";
import CardsList from "./components/CardsList";

const Cards = () => {
  const { customer, isCustomerLoading } = useOmise();

  const showCardsList = !!customer?.cards?.total && !!customer?.cards.data;

  return showCardsList ? (
    <CardsList list={customer?.cards?.data as card[]} />
  ) : (
    <ScreenWrapper
      withScrollView={false}
      style={styles.container}
    >
      {isCustomerLoading ? (
        <ActivityIndicator color={Colors.PRIMARY} />
      ) : (
        <CardsEmptyStatement />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Cards;
