import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

Date.prototype.toString = function () {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const year = this.getFullYear();
  const month = months[this.getMonth()];
  const date = this.getDate();

  let confirmDate = `${year}년 ${month} ${date}일`;

  return { confirmDate };
};

function AddTimeDate({
  newStartDate,
  setNewStartDate,
  newEndDate,
  setNewEndDate,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (confirmDate) => {
    if (confirmDate >= date2)
      Alert.alert("경고", "종료 날짜 이후는 선택할 수 없습니다.");
    else setDate(confirmDate);
    hideDatePicker();
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleDateConfirm2 = (confirmDate) => {
    if (confirmDate <= date)
      Alert.alert("경고", "시작 날짜 이전은 선택할 수 없습니다.");
    else setDate2(confirmDate);
    hideDatePicker2();
  };

  return (
    <>
      <View style={styles.timeDate}>
          <View style={styles.startEnd}>
            <Text style={styles.startEndText}>날짜:</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <TextInput
                pointerEvents="none"
                editable={false}
                value={date.toString().confirmDate}
                style={
                  isDatePickerVisible ? styles.touchedDateText : styles.dateText
                }
              ></TextInput>
              <DateTimePicker 
                style = {styles.datepicker}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              ></DateTimePicker>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 timeDate:{
    marginTop:20,
 },

 startEnd:{
    flexDirection:'row',
},

dateText:{
    marginLeft:12,
    fontSize:14,
},


touchedDateText: {
    marginLeft:12,
    
}

});

export default AddTimeDate;
