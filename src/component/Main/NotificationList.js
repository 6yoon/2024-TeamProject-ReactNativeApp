import Notification from "./Notification";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";
import { useRef } from "react";
import Icon from "react-native-vector-icons/Entypo";

function NotificationList({ todolist, setTodolist }) {
  const scrolling = useRef(new Animated.Value(0)).current;
  const onScroll = (e) => {
    const position = e.nativeEvent.contentOffset.y;

    scrolling.setValue(position);
  };

  function handlePress(id) {
    let index = todolist.findIndex((item) => item.id === id);
    if (index === -1) return; // id가 리스트에 없으면 아무 작업도 하지 않음
    let copylist = todolist.map((item, idx) => {
      if (item.isTouched && idx !== index) return { ...item, isTouched: false };
      if (idx === index) return { ...item, isTouched: !item.isTouched };
      return item;
    });

    setTodolist(copylist);
  }

  function checkPress(id) {
    let index = todolist.findIndex((item) => item.id === id);
    let copylist = [...todolist];
    copylist[index].isChecked = !copylist[index].isChecked;
    setTodolist(copylist);
  }

  return (
    <Animated.ScrollView
      scrollEventThrottle={10}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      style={styles.list}
    >
      {todolist.map((item) => (
        <Notification
          key={item.id}
          {...item}
          handlePress={() => handlePress(item.id)}
          checkPress={() => checkPress(item.id)}
        ></Notification>
      ))}
      <TouchableOpacity style={styles.plus}>
        <Icon
          style={styles.plusIcon}
          name="plus"
          size={20}
          color="#6E3BFF"
        ></Icon>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 4,
  },
  plus: {
    /* borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid", */
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 32,
  },
  plusIcon: {},
});

export default NotificationList;
