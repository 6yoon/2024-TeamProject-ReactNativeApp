import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Alert, 
  Keyboard, TouchableWithoutFeedback } from 'react-native';
import cancelIcon from '../../../public/images/cancel1.png';
import DatePicker from 'react-native-date-picker'

const saveDiaryEntry = (date, title, content) => {
  console.log('Diary Entry Saved:', { date, title, content });
};

function AddDiary({ navigation }) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


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

  // 날짜 형식 검증 함수 (YYYY.MM.DD 형식 확인)
  const isValidDate = (date) => {
    const dateRegex = /^\d{4}\.\d{2}\.\d{2}$/;
    return dateRegex.test(date);
  };

  const handleSave = () => {
    if (date.trim() === "" || title.trim() === "" || content.trim() === "") {
      Alert.alert('필수 입력', '날짜, 제목, 내용을 모두 입력해주세요.');
      return;
    }

    // 날짜 형식이 맞지 않는 경우
    if (!isValidDate(date)) {
      Alert.alert('날짜 오류', '날짜를 YYYY.MM.DD 형식으로 입력해주세요.');
      return;
    }

    saveDiaryEntry(date, title, content);
    navigation.navigate('diary', { date, title, content });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.calendar}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>일기장</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('diary')}>
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
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      
      <TouchableOpacity style={styles.Button} onPress={handleSave}>
        <Text style={styles.buttonText}>기록하기</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 70,
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
    marginLeft: 16,
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
    width: 100,
    height: 40,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AddDiary;
