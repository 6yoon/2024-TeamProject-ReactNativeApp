import { View, StyleSheet, Image, Text } from "react-native";

function MyPage() {
  return (
    <View style={styles.mypage}>
      <Text>MyPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mypage: {
    backgroundColor: "#fff",
    flex: 1,
  }
});

export default MyPage;
