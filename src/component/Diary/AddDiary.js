import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import cancelIcon from '../../../public/images/cancel1.png';

const saveDiaryEntry = (date, title, content) => {
  console.log('Diary Entry Saved:', { date, title, content });
};

function AddDiary({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  
  const onChangeDateText = (inputDate) => {
    const formatted = inputDate
    .replace(/[^0-9]/g, '')  // 숫자만 남김
    .replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')  // YYYYMMDD를 YYYY.MM.DD로 변환
    .substring(0, 10);  // 최대 10글자까지 제한
    setDate(formatted);
  };
 

  const onChangeTitleText = (inputTitle) => {
    setTitle(inputTitle);
  };

  const onChangeContentText = (inputContent) => {
    setContent(inputContent);
  };

  const handleSave = () => {
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert('필수 입력', '제목과 내용을 입력해주세요.');
      return;
    }

  
    saveDiaryEntry(title, content);

  
    navigation.navigate('Diary');
  };

  return (
    <View style={styles.calendar}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>일기장</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
        <Image source={cancelIcon} style={styles.cancelIcon} />
      </TouchableOpacity>
      <View style={styles.title_title}>
      <TextInput
          onChangeText={onChangeDateText}
          value={date}
          placeholder='날짜 (YYYYMMDD)'
          style={styles.date_input}
          keyboardType="numeric"
          maxLength={10}
        />
        <TextInput
          onChangeText={onChangeTitleText}
          value={title}
          placeholder='제목'
          style={styles.title_input}
        />
        <TextInput
          onChangeText={onChangeContentText}
          value={content}
          placeholder='내용'
          style={styles.content_input}
        />
      </View>
      <View style={styles.ButtonBox}>
        <TouchableOpacity
          style={styles.Button}
          onPress={handleSave}>
          <Text style={styles.buttonText}>기록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
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
  cancelIcon: {
    width: 19,
    height: 19,
    marginLeft: 16,
    marginTop: 10,
  },
  title_title: {
    marginLeft: 16
  },
  date_input: {
    marginTop: 41,
    marginRight: 16,
  }, 

  title_input: {
    marginTop: 30,
    marginRight: 16,
    fontWeight: "bold",
    fontSize: 16,
  },

  content_input: {
    marginTop: 30,
    marginRight: 16,
  },
  Button: {
    backgroundColor: "#6E3BFF",
    width: 83,
    height: 29.63,
    borderRadius: 30,
    marginTop: 400,
    marginLeft: 294,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 8
  },
});

export default AddDiary;
