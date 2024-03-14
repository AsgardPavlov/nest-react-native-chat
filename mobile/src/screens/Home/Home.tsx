import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { commonStyles } from "styles/common";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.defaultFont]}>Hey, there!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
