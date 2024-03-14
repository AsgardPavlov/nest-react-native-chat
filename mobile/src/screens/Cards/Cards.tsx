import { StyleSheet } from "react-native";
import ScreenWrapper from "components/ScreenWrapper";

import CardsEmptyStatement from "./components/CardsEmptyStatement";

const Cards = () => {
  return (
    <ScreenWrapper
      withScrollView={false}
      style={styles.container}
    >
      <CardsEmptyStatement />
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
