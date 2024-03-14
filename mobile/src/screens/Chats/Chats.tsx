import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "styles/common";

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.defaultFont]}>Chats Screen</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
