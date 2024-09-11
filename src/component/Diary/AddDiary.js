import React, { useState } from 'react';
import {
  View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Alert,
  Keyboard, TouchableWithoutFeedback, Modal, ScrollView
} from 'react-native';
import cancelIcon from '../../../public/images/cancel1.png';
import AddTimeDate from './AddTimeDate';

const saveDiaryEntry = (date, title, content, startTime, endTime) => {
  console.log('Diary Entry Saved:', { date, title, content, startTime, endTime });
};

function AddDiary({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newStartTime, setNewStartTime] = useState([0, 0]);
  const [newEndTime, setNewEndTime] = useState([0, 0]); 

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}.${month}.${day}`;
  };

  const onChangeTitleText = (inputTitle) => {
    setTitle(inputTitle);
  };

  const onChangeContentText = (inputContent) => {
    setContent(inputContent);
  };

  const handleSave = () => {
    const formattedDate = formatDate(date);

    if (formattedDate.trim() === "" || title.trim() === "" || content.trim() === "") {
      Alert.alert('필수 입력', '날짜, 제목, 내용을 모두 입력해주세요.');
      return;
    }

    const startTime = `${newStartTime[0]}:${newStartTime[1]}`;
    const endTime = `${newEndTime[0]}:${newEndTime[1]}`;

    saveDiaryEntry(formattedDate, title, content, startTime, endTime);
    navigation.navigate('diary', { date: formattedDate, title, content, startTime, endTime });
  };

  const handleDateSelect = (year, month, day) => {
    const selectedDate = new Date(year, month - 1, day);
    setDate(selectedDate);
    setShowModal(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.calendar}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>일기장</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
          <Image source={cancelIcon} style={styles.cancelIcon} />
        </TouchableOpacity>

        <View style={styles.title_title}>
          
          {/* TimeDate component for time selection */}
          <AddTimeDate
          isAllDay={false}
          noTime={false}
  
         
        />

          {/* 날짜 선택 모달 */}
          <Modal
            visible={showModal}
            transparent={true}
            animationType="scroll"
            onRequestClose={() => setShowModal(false)}
          >
            <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>날짜 선택</Text>
                  <ScrollView contentContainerStyle={styles.datePickerContainer}>
                    {/* 년도 */}
                    <Text style={styles.datePickerText}>2024년</Text>
                    {/* 월 선택 */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {Array.from({ length: 12 }, (_, i) => (
                        <TouchableOpacity key={i + 1} onPress={() => handleDateSelect(2024, i + 1, date.getDate())}>
                          <Text style={styles.monthText}>{i + 1}월</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                    {/* 일 선택 */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {Array.from({ length: 31 }, (_, i) => (
                        <TouchableOpacity key={i + 1} onPress={() => handleDateSelect(2024, date.getMonth() + 1, i + 1)}>
                          <Text style={styles.dayText}>{i + 1}일</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </ScrollView>
                  <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowModal(false)}>
                    <Text style={styles.modalCloseButtonText}>닫기</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

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

const styles = StyleSheet.create ({
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
  datePickerButton: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 20,
  },
  monthText: {
    marginLeft: 120,
    marginTop: 30,
  },
  dayText: {
    marginLeft: 30,
    marginTop: 30,
  },
  modalCloseButton: {
    marginTop: 50,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datePickerContainer: {
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
  },
});

export default AddDiary;
