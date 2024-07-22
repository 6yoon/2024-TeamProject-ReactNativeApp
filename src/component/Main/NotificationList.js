import Notification from "./Notification";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { useRef, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";

function NotificationList({ todolist, setTodolist, setY }) {
  const scrolling = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
    { useNativeDriver: false }
  );

  function handlePress(id) {
    let index = todolist.findIndex((item) => item.id === id);
    if (index === -1) return;
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

  const renderItem = ({ item }) => (
    <Notification
      key={item.id}
      {...item}
      handlePress={() => handlePress(item.id)}
      checkPress={() => checkPress(item.id)}
    />
  );

  return (
    <FlatList
      data={todolist}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onScroll={onScroll}
      scrollEventThrottle={10}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      ListFooterComponent={
        <TouchableOpacity style={styles.plus}>
          <Icon style={styles.plusIcon} name="plus" size={20} color="#6E3BFF" />
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
  },
  plus: {
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
