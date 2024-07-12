import { View, StyleSheet, Image, Text } from "react-native";
import Header from "./Header";
import profile from "../../../public/images/profile.jpg"
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Main() {
  const today = new Date();
  const name = "한강고양이";
  const itemNum = 3;
  return (
    <View style={styles.main}>
      <Header date={today}></Header>
      <View style={styles.background}>
        <View style={styles.profileBox}>
          <Image source={profile} style={styles.profile}></Image>
          <Text style={styles.profileText}>
            오늘 {name}님의 일정은 {itemNum}개입니다.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
  },
  background: {
    backgroundColor: "#6E3BFF0D",
    flex: 1,
  },
  profileBox: {
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default Main;
