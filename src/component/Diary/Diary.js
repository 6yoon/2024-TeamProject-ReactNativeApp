import { View, StyleSheet, Image, Text } from "react-native";

function Diary() {
  return (
    <View style={styles.diary}>
      <Text>diary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  diary: {
    backgroundColor: "#fff",
    flex: 1,
  }
});

export default Diary;
