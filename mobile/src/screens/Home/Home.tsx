import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ScreenWrapper from "components/ScreenWrapper";
import { commonStyles } from "styles/common";
import { RootStackParamList } from "types/screens";
import { fontSize } from "utils/font-size-helper";

const Home = ({
  navigation
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  return (
    <ScreenWrapper>
      <View style={[styles.card]}>
        <Text
          style={[commonStyles.defaultFontBold, styles.cardTitle]}
          onPress={() => navigation.navigate("Cards")}
        >
          Cards
        </Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 32,
    paddingHorizontal: 16,
    ...commonStyles.defaultShadow,
    ...commonStyles.borderRadius
  },
  cardTitle: {
    fontSize: fontSize.large
  }
});

export default Home;
