import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

function Edit({ route, navigation }) {
  const {
    updatedName,
    updatedBirth,
    updatedTel,
    sex = "여성",
    date = "2024.04.03",
    updatedProfileImage,
  } = route.params || {};

  const [name, setName] = useState(updatedName || "oloqlon");
  const [birth, setBirth] = useState(updatedBirth || "2004. 03. 15");
  const [tel, setTel] = useState(updatedTel || "010-2222-2222");
  const [profileImage, setProfileImage] = useState(updatedProfileImage || require("../../../public/images/profile.jpg"));

  const nameInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSave = () => {
    navigation.navigate('myPage', {
      updatedName: name,
      updatedBirth: birth,
      updatedTel: tel,
      sex,
      date,
      updatedProfileImage: profileImage,
    });
  };

  const handleBirthChange = (text) => {
    const formatted = text
      .replace(/[^0-9]/g, '')  
      .replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')  
      .substring(0, 10); 
    setBirth(formatted);
  };

  const handleTelChange = (text) => {
    const formatted = text
      .replace(/[^0-9]/g, '')  
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')  
      .substring(0, 13); 
    setTel(formatted);
  };

  const handleProfileImageChange = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={styles.mypage}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>마이페이지 수정</Text>
      </View>
      <View style={styles.mypageItem}>
        <View style={styles.profilebox}>
          <TouchableOpacity onPress={handleProfileImageChange}>
            <Image source={profileImage} style={styles.profile} />
          </TouchableOpacity>
          <View style={styles.textbox}>
            <TextInput
              ref={nameInputRef}
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
            onChangeText={handleBirthChange}
            style={styles.birthDate}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View style={styles.telbox}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            value={tel}
            onChangeText={handleTelChange}
            style={styles.edit_telNum}
            keyboardType="numeric"
            maxLength={13}
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
