import { View, StyleSheet, Image, Text } from "react-native";

function AddDiary() {
  return (
    <View style={styles.calendar}>
      <Text>AddDiary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#fff",
    flex: 1,
  }
});

export default AddDiary;
