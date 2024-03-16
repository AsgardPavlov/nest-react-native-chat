import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PrimaryButton from "components/PrimaryButton";
import ScreenWrapper from "components/ScreenWrapper";
import { useOmise } from "contexts/OmiseProvider";
import { RootStackParamList } from "types/screens";

const Home = ({
  navigation
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { isCustomerLoading } = useOmise();

  return (
    <ScreenWrapper
      withScrollView={false}
      style={styles.container}
    >
      <PrimaryButton
        title="Go to Cards"
        loading={isCustomerLoading}
        onPress={() => navigation.navigate("Cards")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
