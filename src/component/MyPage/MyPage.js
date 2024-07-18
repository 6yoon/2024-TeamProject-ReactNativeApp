import { View, StyleSheet, Image, Text } from "react-native";
import profile from "../../../public/images/profile.jpg";


function MyPage() {
  const name = "oloqlon";
  const Date = "2024.04.03";
  const Sex = "여성";
  return (
    <View style={styles.mypage}>
      <View style = {styles.titlebox}>
      <Text style={styles.title}>마이페이지</Text>
      </View>
      <View style = {styles.mypageItem}>
      <View style = {styles.profilebox}>
        <Image source={profile} style={styles.profile}></Image>
        <View style = {styles.textbox}>
        <Text style = {styles.username}>{name}</Text>
        <Text style = {styles.joinDate}>{Date} 가입함</Text>
        <Text style = {styles.sex}>{Sex}</Text>
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mypage: {
    backgroundColor: "#fff",
    flex: 1,
  },
  
  titlebox: {
    alignItems:"center",
    marginTop:10,
  },

  title: {
    fontWeight: "bold",
    fontSize:16
  
  },

  mypageItem: {
    marginLeft:16,
    marginRight:16,
  },

  profilebox: {
    width: 393,
    height: 117,
    flexDirection: "row",
    marginTop:45,
  },

  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  username: {
    fontWeight:"bold",
    fontSize:16,
    marginLeft:28,
    marginTop:9,
  },

  joinDate: {
    marginLeft:28,
    marginTop:4,
    color:"#686868",
  },

  sex: {
  marginLeft:28,
   marginTop:10,
   color:"#686868",
 },

});

export default MyPage;
