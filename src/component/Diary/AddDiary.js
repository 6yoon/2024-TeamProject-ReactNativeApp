import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Button, Alert } from "react-native";
import cancelIcon from '../../../public/images/cancel1.png';

function AddDiary({ navigation }) {
  const [text, setText] = useState("");

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  const moveDiary = () => {
    navigation.navigate('Diary');
  };

  return (
    <View style={styles.calendar}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>일기장</Text>
      </View>
      <TouchableOpacity onPress={moveDiary}> 
        <Image source={cancelIcon} style={styles.cancelIcon} />
      </TouchableOpacity>
      <View style={styles.title_title}>
        <Text style={styles.title_Text}>제목</Text>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder='당신의 하루를 한 줄로 표현한다면 ?'
          style={styles.title_input}
        />
        <Text style={styles.content_Text}>내용</Text>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder='당신의 오늘 하루를 기록하여주세요.'
          style={styles.content_input}
        />
      </View>
      <View style = {styles.ButtonBox}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Diary')}>
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

  title_title:{
    marginLeft:16
  },

  title_Text: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 39,
  },
  title_input: {
    marginTop: 10,
    marginRight: 16,

  },
  content_Text: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 39,
  },
  content_input: {
    marginTop: 10,
    marginRight: 16,
  },

  Button:{
    backgroundColor: "#6E3BFF",
    width:83,
    height:29.63,
    borderRadius: 30,
    marginTop:400,
    marginLeft:294,

  },
  buttonText: {
    color: '#fff', 
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:"center",
    marginTop:8
  },
});

export default AddDiary;
