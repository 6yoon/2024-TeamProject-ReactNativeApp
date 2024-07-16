import Notification from "./Notification";
import { StyleSheet, View, Animated } from "react-native";
import { useRef } from "react";

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
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 4,
  }
});

export default NotificationList;
