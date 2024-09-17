import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Switch } from 'react-native';
import profile from "../../../public/images/profile.jpg";
import editIcon from "../../../public/images/pencil.png";
import style from 'react-native-modal-date-picker/style';

function MyPage({ route, navigation }) {
  // 알림 및 위치 서비스 설정 상태 관리
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isLocationEnabled, setLocationEnabled] = useState(false);

  const toggleNotificationSwitch = () => setNotificationEnabled(previousState => !previousState);
  const toggleLocationSwitch = () => setLocationEnabled(previousState => !previousState);

  // route.params에서 전달된 데이터 받아오기
  const {
    updatedName = "oloqlon",
    updatedBirth = "2004. 03. 15",
    updatedTel = "010-2222-2222",
    sex = "여성",
    date = "2024.04.03",
    updatedProfileImage,
  } = route.params || {};

  return (
    <View style={styles.mypage}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>마이페이지</Text>
      </View>
      <View style={styles.mypageItem}>
        <View style={styles.profilebox}>
        <Image
        source={updatedProfileImage ? { uri: updatedProfileImage.uri } : require("../../../public/images/profile.jpg")}
        style={{ width: 80, height: 80, borderRadius: 50 }}
      />
          <View style={styles.textbox}>
            <Text style={styles.username}>{updatedName}</Text>
            <TouchableOpacity  onPress={() =>
          navigation.navigate('edit', {
            updatedName,
            updatedBirth,
            updatedTel,
            sex,
            date,
            updatedProfileImage,
          })
        }>
              <Image source={editIcon} style={styles.editIcon} />
            </TouchableOpacity>
            <Text style={styles.joinDate}>{date} 가입함</Text>
            <Text style={styles.sex}>{sex}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.birthbox}>
        <View style={styles.separator} />
          <Text style={styles.label}>생년월일</Text>
          <Text style={styles.birthDate}>{updatedBirth}</Text>
        </View>
        <View style={styles.telbox}>
          <Text style={styles.label}>전화번호</Text>
          <Text style={styles.telNum}>{updatedTel}</Text>
        </View>
        <View style={styles.alarmbox}>
          <Text style={styles.label}>알림 설정</Text>
          <Switch
          onValueChange={toggleNotificationSwitch}
          value={isNotificationEnabled}
          style={[styles.toggleSwitch, { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }]}
        />
        </View>
        <View style={styles.locationbox}>
          <Text style={styles.label}>위치 서비스 설정</Text>
          <Switch
          onValueChange={toggleLocationSwitch}
          value={isLocationEnabled}
          style={[styles.toggleSwitch, { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }]}
        />
        </View>
        <View style={styles.separator} />
      </View>
      <Text style={styles.Logout}>로그아웃</Text>
      <View style = {styles.mypagefooter}>
      {/* <Text style = {style.appname}>HowTo</Text> */}
      <Text style = {styles.version}>현재 앱 버전 2.4.14v</Text>
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

  editIcon: {
    position:'absolute',
    marginLeft:90,
    marginTop:60,
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
    marginTop: 10,
    fontSize:12,
    
 },

 birthDate: {
  marginLeft: 249,
  fontSize:12,
  marginTop: 10,

 },

telbox: {
  flexDirection:'row',
  marginTop: 10,
},

telNum: {
  marginLeft: 228,
  fontSize:12,
  marginTop: 10,

},

alarmbox: {
  flexDirection:'row',
  marginTop: 10,
  alignItems: 'center',
},

locationbox: {
  flexDirection:'row',
  marginTop: 10,
  alignItems: 'center',
},

separator: {
  borderBottomColor: '#D9D9D9',
  borderBottomWidth: StyleSheet.hairlineWidth,
  marginTop: 25,
},

Logout: {
  marginTop:30,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 170,
  fontSize:12,
},

label: {
  fontSize: 12,
  color: "#686868",
  marginTop:10,
},

toggleSwitch: {
  marginLeft: 'auto',
},

mypagefooter: {
  marginTop:100,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

appname:{
  color:"#686868",
  fontSize:12,
},

version:{
  color:"#686868",
  fontSize:12,
}

});

export default MyPage;
