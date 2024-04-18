import { StyleSheet, Text, View } from "react-native";

function Header({ date }) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthday = `${month}월 ${day}일`;
  return (
    <>
        <View style={styles.header}>
          <Text style={styles.text}>{monthday}</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid',
  },
  text: {
    fontSize: 30,
    fontFamily: "Pretendard8",
    marginLeft: 50,
  },
});

export default Header;
