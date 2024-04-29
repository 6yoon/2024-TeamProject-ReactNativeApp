import { StyleSheet, Text, View } from "react-native";

function Header({ date }) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthDay = `${month}월 ${day}일`;
  return (
    <>
        <View style={styles.header}>
          <Text style={styles.text}>{monthDay}</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.11,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid',
  },
  text: {
    fontSize: 34,
    fontFamily: "Pretendard8",
    marginLeft: 40,
    marginTop: 14,
  },
});

export default Header;
