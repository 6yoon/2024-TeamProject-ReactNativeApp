import { View, StyleSheet, Image, Text, TouchableOpacity  } from "react-native";
import profile from "../../../public/images/profile.jpg";
import editIcon from "../../../public/images/pencil.png";


function MyPage({ navigation }) {
  const name = "oloqlon";
  const Date = "2024.04.03";
  const Sex = "여성";
  const Bitrh = "2004. 03. 15";
  const Tel = "010-2222-2222";
  const moveEdit = () => {
    navigation.navigate('Edit');
}
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
        <TouchableOpacity onPress={moveEdit}>
                <Image source={editIcon} style={styles.editIcon} />
              </TouchableOpacity>
        <Text style = {styles.joinDate}>{Date} 가입함</Text>
        <Text style = {styles.sex}>{Sex}</Text>
        </View>
      </View>
          <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop:-10,
            }}/>
        <View style = {styles.birthbox}>
          <Text style = {{
              fontSize:12,
              color:"#686868",
          }}>생년월일</Text>
          <Text style = {styles.birthDate}>{Bitrh}</Text>
        </View>
        <View style = {styles.telbox}>
          <Text 
            style = {{
              fontSize:12,
              color:"#686868",}}>전화번호</Text>
          <Text style = {styles.telNum}>{Tel}</Text>
        </View>
        <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop:25,
            }}/>
      </View>
      <Text style = {styles.Logout}>로그아웃</Text>
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

  editIcon: {
    marginLeft: 90,
    marginTop:-17,
  },

  joinDate: {
    fontSize:12,
    marginLeft:28,
    marginTop:4,
    color:"#686868",
  },

  sex: {
    fontSize:12,
    marginLeft:28,
    marginTop:10,
    color:"#686868",
 },

  birthbox: {
    flexDirection:'row',
    marginTop: 30,
    fontSize:12,
    
 },

 birthDate: {
  marginLeft: 249,
  fontSize:12,
 },

telbox: {
  flexDirection:'row',
  marginTop: 20,
},

telNum: {
  marginLeft: 228,
  fontSize:12,
},

Logout: {
  marginTop:30,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 170,
  fontSize:12,
}


});

export default MyPage;
