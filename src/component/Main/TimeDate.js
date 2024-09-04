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
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const year = this.getFullYear();
  const month = months[this.getMonth()];
  const date = this.getDate();
  const day = days[this.getDay()];
  const hours = this.getHours();
  const minutes = this.getMinutes();
  const seconds = this.getSeconds();

  let confirmDate = `${year}년 ${month} ${date}일`;
  let confirmTime = `${hours}시 ${minutes}분`;

  return { confirmDate, confirmTime, hours, minutes };
};

function TimeDate({
  isAllDay,
  noTime,
  newStartTime,
  setNewStartTime,
  newEndTime,
  setNewEndTime,
}) {
  function turnNewTime(time, num) {
    let copyTime;
    let newHour = Number(time.toString().hours);
    let newMin = Number(time.toString().minutes);

    if (num === 1) {
      copyTime = [...newStartTime];
      copyTime[0] = newHour;
      copyTime[1] = newMin;
      setNewStartTime(copyTime);
    } else {
      copyTime = [...newEndTime];
      copyTime[0] = newHour;
      copyTime[1] = newMin;
      setNewEndTime(copyTime);
    }
  }

  useEffect(() => {
    turnNewTime(time, 1);
  }, [time]);

  useEffect(() => {
    turnNewTime(time2, 2);
  }, [time2]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isTimePickerVisible2, setTimePickerVisibility2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(
    new Date(new Date().getTime() + 60 * 60 * 1000)
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (confirmDate) => {
    if (confirmDate >= date)
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

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (confirmTime) => {
    if (confirmTime >= time2)
      Alert.alert("경고", "종료 시간 이후는 선택할 수 없습니다.");
    else {
      setTime(confirmTime);
      turnNewTime(confirmTime, 1);
    }
    hideTimePicker();
  };

  const showTimePicker2 = () => {
    setTimePickerVisibility2(true);
  };

  const hideTimePicker2 = () => {
    setTimePickerVisibility2(false);
  };

  const handleTimeConfirm2 = (confirmTime) => {
    if (confirmTime <= time)
      Alert.alert("경고", "시작 시간 이전은 선택할 수 없습니다.");
    else {
      setTime2(confirmTime);
      turnNewTime(confirmTime, 2);
    }
    hideTimePicker2();
  };

  return (
    <>
      <View style={styles.timeDate}>
        <View style={styles.timeDateBox}>
          <View style={styles.startEnd}>
            <Text style={styles.startEndText}>시작</Text>
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
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              ></DateTimePicker>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimePicker}>
              <TextInput
                pointerEvents={noTime}
                editable={false}
                value={time.toString().confirmTime}
                style={
                  isAllDay
                    ? styles.noTimeText
                    : isTimePickerVisible
                    ? styles.touchedtimeText
                    : styles.timeText
                }
              ></TextInput>
              <DateTimePicker
                isVisible={isTimePickerVisible}
                mode="time"
                minuteInterval={5}
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              ></DateTimePicker>
            </TouchableOpacity>
          </View>
          <View style={styles.startEnd}>
            <Text style={styles.startEndText}>종료</Text>
            <TouchableOpacity onPress={showDatePicker2}>
              <TextInput
                pointerEvents="none"
                editable={false}
                value={date2.toString().confirmDate}
                style={
                  isDatePickerVisible2
                    ? styles.touchedDateText
                    : styles.dateText
                }
              ></TextInput>
              <DateTimePicker
                isVisible={isDatePickerVisible2}
                mode="date"
                onConfirm={handleDateConfirm2}
                onCancel={hideDatePicker2}
              ></DateTimePicker>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimePicker2}>
              <TextInput
                pointerEvents={noTime}
                editable={false}
                value={time2.toString().confirmTime}
                style={
                  isAllDay
                    ? styles.noTimeText
                    : isTimePickerVisible2
                    ? styles.touchedtimeText
                    : styles.timeText
                }
              ></TextInput>
              <DateTimePicker
                isVisible={isTimePickerVisible2}
                mode="time"
                minuteInterval={5}
                onConfirm={handleTimeConfirm2}
                onCancel={hideTimePicker2}
              ></DateTimePicker>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.timeBGround}></View>
    </>
  );
}

const styles = StyleSheet.create({
  timeDate: {
    marginBottom: 12,
    padding: 8,
  },
  timeDateBox: {
    width: 190,
  },
  timeIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  arrowIcon: {
    position: "relative",
    marginLeft: 10,
    marginRight: 14,
  },
  timeText: {
    fontSize: 16,
    width: 90,
    backgroundColor: "#6E3BFF0D",
    textAlign: "center",
    padding: 6,
    borderRadius: 6,
  },
  touchedtimeText: {
    fontSize: 16,
    width: 90,
    backgroundColor: "#6E3BFF0D",
    textAlign: "center",
    padding: 4,
    color: "#6E3BFF",
    borderRadius: 6,
  },
  noTimeText: {
    fontSize: 16,
    width: 90,
    backgroundColor: "#6E3BFF0D",
    textAlign: "center",
    padding: 4,
    color: "#ccc",
    textDecorationLine: "line-through",
    borderRadius: 6,
  },
  dateText: {
    fontSize: 16,
    width: 140,
    backgroundColor: "#6E3BFF0D",
    textAlign: "center",
    marginRight: 10,
    padding: 6,
    borderRadius: 6,
  },
  touchedDateText: {
    fontSize: 16,
    width: 140,
    backgroundColor: "#6E3BFF0D",
    textAlign: "center",
    marginRight: 10,
    padding: 6,
    borderRadius: 6,
    color: "#6E3BFF",
  },
  /* timeBGround: {
    backgroundColor: "#6E3BFF0D",
    width: "100%",
    height: 150,
    position: "absolute",
    borderRadius: 10,
    zIndex: -1,
  }, */
  startEnd: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  startEndText: {
    fontSize: 16,
    width: 90,
    justifyContent: "center",
  },
});

export default TimeDate;
