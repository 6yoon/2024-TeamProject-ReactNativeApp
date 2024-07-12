import { View, StyleSheet, Image, Text } from "react-native";

function Calendar() {
  return (
    <View style={styles.calendar}>
      <Text>calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#fff",
    flex: 1,
  }
});

export default Calendar;
