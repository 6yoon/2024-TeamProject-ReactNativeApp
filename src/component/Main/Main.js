import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Header from "./Header";
import NotificationList from "./NotificationList";
import Timeline from "./Timeline";
import Add from "./Add";
import profile from "../../../public/images/profile.jpg";
import { useRef, useState } from "react";

function Main({ addVisible, setAddVisible }) {
  const today = new Date();
  const name = "한강고양이";
  const idRef = useRef(4);
  const [todolist, setTodolist] = useState([
    {
      id: 0,
      isChecked: false,
      isTouched: false,
      content: "공복 유산소",
      startTime: [7, 22],
      endTime: [8, 22],
      tag: "",
      alarm: "",
      memo: "",
    },
    {
      id: 1,
      isChecked: false,
      isTouched: false,
      content: "영어 학원 가기",
      startTime: [9, 0],
      endTime: [11, 0],
      tag: "",
      alarm: "",
      memo: "",
    },
    {
      id: 2,
      isChecked: false,
      isTouched: false,
      content: "친구랑 마라탕",
      startTime: [13, 44],
      endTime: [17, 22],
      tag: "",
      alarm: "",
      memo: "",
    },
  ]);

  const scrollViewRef = useRef(null);

  function mainScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;

    /* if (offsetX > 0 && offsetX < 400) {
      scrollViewRef.current.scrollTo({ x: contentWidth, animated: true });
    } else if (offsetX > 400 && offsetX < contentWidth) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    } */
    
  }

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
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={mainScroll}
        >
          <View style={styles.scrollBox}>
            <View style={styles.list}>
              <View style={styles.menu}>
                <Text style={styles.menuText}>Time</Text>
                <Text style={styles.menuText}>Notification</Text>
              </View>
              <View style={styles.listcontent}>
                <Timeline todolist={todolist}></Timeline>
                <View style={styles.todolist}>
                  <NotificationList
                    todolist={todolist}
                    setTodolist={setTodolist}
                    setAddVisible={setAddVisible}
                  ></NotificationList>
                </View>
              </View>
            </View>
            <View style={styles.habit}>
              <Text>안녕하세요하세요하세요하세요하세요하세요하세요</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Add
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        todolist={todolist}
        setTodolist={setTodolist}
        idRef={idRef}
      />
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
    flexDirection: "column",
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
  scrollBox: {
    flexDirection: "row",
  },
  list: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    flex: 1,
    borderWidth: 1,
    width: 400,
  },
  menu: {
    flexDirection: "row",
    height: 15,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 50,
    marginLeft: 5,
  },
  listcontent: {
    flexDirection: "row",
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
