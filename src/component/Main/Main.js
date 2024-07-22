import { View, StyleSheet, Image, Text } from "react-native";
import Header from "./Header";
import NotificationList from "./NotificationList";
import Timeline from "./Timeline";
import profile from "../../../public/images/profile.jpg";
import { useState } from "react";

function Main({route}) {
  const today = new Date();
  const name = "한강고양이";
  const [todolist, setTodolist] = useState([
    {
      id: 0,
      isChecked: false,
      isTouched: false,
      content: "공복 유산소",
      time: [7, 1],
    },
    {
      id: 1,
      isChecked: false,
      isTouched: false,
      content: "영어 학원 가기",
      time: [9, 1],
    },
    {
      id: 2,
      isChecked: false,
      isTouched: false,
      content: "친구랑 마라탕",
      time: [13, 1],
    },
    {
      id: 3,
      isChecked: false,
      isTouched: false,
      content: "수학 학원 가기",
      time: [15, 3],
    },
    {
      id: 4,
      isChecked: false,
      isTouched: false,
      content: "가족 외식",
      time: [19, 2],
    },
  ]);

  return (
    <View style={styles.main}>
      <Header date={today}></Header>
      <View style={styles.background}>
        <View style={styles.profileBox}>
          <Image source={profile} style={styles.profile}></Image>
          <Text style={styles.profileText}>
            오늘 {name}님의 일정은 {todolist.length}개입니다.
          </Text>
        </View>
        <View style={styles.list}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>Time</Text>
            <Text style={styles.menuText}>Notification</Text>
          </View>
          <View style={styles.listcontent}>
            <Timeline todolist={todolist}></Timeline>
            <View style={styles.todolist}>
              <NotificationList todolist={todolist} setTodolist={setTodolist}></NotificationList>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
  },
  background: {
    backgroundColor: "#6E3BFF0D",
    flex: 1,
  },
  profileBox: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  list: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    marginBottom: 20,
  },
  menuText: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 50,
    marginLeft: 5,
  },
  listcontent: {
    flexDirection: "row",
    flex: 1,
  },
  todolist: {
    /* borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid", */
    position: "relative",
    left: 8,
  },
});

export default Main;
