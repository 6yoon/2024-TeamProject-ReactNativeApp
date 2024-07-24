import Notification from "./Notification";
import { StyleSheet, Animated, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { SwipeListView } from "react-native-swipe-list-view";

function NotificationList({ todolist, setTodolist }) {
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
      openRowKey={openRowKey}
    />
  );

  const [openRowKey, setOpenRowKey] = useState(null);

  const onRowOpen = (rowKey) => {
    setOpenRowKey(rowKey);
  };

  const onRowClose = () => {
    setOpenRowKey(null);
  };

  const deleteNotification = (id) => {
      let index = todolist.findIndex((item) => item.id === id);
      let copylist = [...todolist];
      if (index !== -1) {
        copylist.splice(index, 1);
      }
      setTodolist(copylist);
  };

  return (
    <SwipeListView
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
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.deleteBtn}>
          <TouchableOpacity onPress={()=>deleteNotification(data.item.id)}>
            <View style={styles.deleteItem}>
              <Icon
                name="trash"
                size={18}
                color="#fff"
                style={styles.deleteIcon}
              ></Icon>
            </View>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-40}
      disableRightSwipe={true}
      onRowOpen={onRowOpen}
      onRowClose={onRowClose}
    />
  );
}

const styles = StyleSheet.create({
  list: {},
  plus: {
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 32,
    width: 256,
  },
  deleteBtn: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 9.8,
    borderRadius: 32,
  },
  deleteItem: {
    width: 255,
    height: 42.01,
    borderRadius: 32,
    backgroundColor: "#6E3BFF",
    marginRight: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  deleteIcon: {
    marginRight: 17.5,
  },
});

export default NotificationList;
