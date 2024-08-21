import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import profile from "../../../public/images/profile.jpg";

function Edit({ route, navigation }) {
  const [name, setName] = useState("oloqlon");
  const [date, setDate] = useState("2024.04.03");
  const [sex, setSex] = useState("여성");
  const [birth, setBirth] = useState("2004. 03. 15");
  const [tel, setTel] = useState("010-2222-2222");

  const handleSave = () => {
    // 수정된 데이터를 MyPage 화면으로 전달
    navigation.navigate('MyPage', {
      updatedName: name,
      updatedBirth: birth,
      updatedTel: tel,
    });
  };

  return (
    <View style={styles.mypage}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>마이페이지</Text>
      </View>
      <View style={styles.mypageItem}>
        <View style={styles.profilebox}>
          <Image source={profile} style={styles.profile} />
          <View style={styles.textbox}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.username}
            />
            <Text style={styles.joinDate}>{date} 가입함</Text>
            <Text style={styles.sex}>{sex}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.birthbox}>
          <Text style={styles.label}>생년월일</Text>
          <TextInput
            value={birth}
            onChangeText={setBirth}
            style={styles.birthDate}
          />
        </View>
        <View style={styles.telbox}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            value={tel}
            onChangeText={setTel}
            style={styles.edit_telNum}
          />
        </View>
        <View style={styles.separator} />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>저장하기</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  mypage: {
    backgroundColor: "#fff",
    flex: 1,
  },
  titlebox: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  mypageItem: {
    marginLeft: 16,
    marginRight: 16,
  },
  profilebox: {
    width: '100%',
    height: 117,
    flexDirection: "row",
    marginTop: 45,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textbox: {
    marginLeft: 28,
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 9,
  },
  editIcon: {
    marginLeft: 90,
    marginTop: -17,
  },
  joinDate: {
    fontSize: 12,
    marginTop: 4,
    color: "#686868",
  },
  sex: {
    fontSize: 12,
    marginTop: 10,
    color: "#686868",
  },
  birthbox: {
    flexDirection: 'row',
    marginTop: 30,
  },
  birthDate: {
    marginLeft: 248,
    fontSize: 12,
    flex: 1,
  },
  telbox: {
    flexDirection: 'row',
    marginTop: 20,
  },
  edit_telNum: {
    marginLeft: 228,
    fontSize: 12,
    flex: 1,
  },
  separator: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 25,
  },
  label: {
    fontSize: 12,
    color: "#686868",
  },
  saveButton: {
    padding: 10,
    borderRadius: 5,
    margin: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'black',
    fontSize: 12,
  },
});

export default Edit;
