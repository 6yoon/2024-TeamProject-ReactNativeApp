import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Icon from "react-native-vector-icons/Entypo";
import Add from "./../Main/Add";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
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
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};

LocaleConfig.defaultLocale = "ko";

function CalendarView({ addVisible, setAddVisible }) {
  const [selected, setSelected] = useState("");
  const popAdd = () => {
    setAddVisible(true);
  };

  return (
    <View style={styles.calendarBox}>
      <Calendar
        style={styles.calendar}
        monthFormat={"yyyy년 M월"}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "#6E3BFF",
          },
        }}
        theme={{
          textMonthFontSize: 20,
          textMonthFontWeight: "bold",
          selectedDayBackgroundColor: "#6E3BFF",
          selectedDayTextColor: "#fff",
          arrowColor: "#6E3BFF",
          dotColor: "#6E3BFF",
          todayTextColor: "#6E3BFF",
          "stylesheet.calendar.header": {
            header: {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 20,
            },
            dayHeader: {
              marginBottom: 20,
              color: "#d9d9d9",
            },
          },
          "stylesheet.calendar.main": {
            week: {
              justifyContent: "space-around",
              flexDirection: "row",
            },
            dayContainer: {
              alignItems: "center",
              height: 96,
            },
            container: {
              padding: 0,
            },
          },
        }}
      />
      <View style={styles.plusBox}>
        <TouchableOpacity style={styles.plus} onPress={popAdd}>
          <Icon style={styles.plusIcon} name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Add addVisible={addVisible} setAddVisible={setAddVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  calendarBox: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 8,
    paddingTop: 20,
  },
  calendar: {},
  plusBox: {
    alignItems: "flex-end",
    marginRight: 16,
  },
  plus: {
    backgroundColor: "#6E3BFF",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default CalendarView;
