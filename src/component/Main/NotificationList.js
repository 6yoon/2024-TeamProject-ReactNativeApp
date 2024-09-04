import Notification from "./Notification";
import { StyleSheet, Animated, TouchableOpacity, View, } from "react-native";
import { useRef, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { SwipeListView } from "react-native-swipe-list-view";

function NotificationList({
  todolist,
  setTodolist,
  setAddMain,
  setAddVisible,
}) {
  const scrolling = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
    { useNativeDriver: false }
  );

  const animatedValues = useRef(todolist.map(() => new Animated.Value(1))).current;
  const hiddenAnimatedValues = useRef(todolist.map(() => new Animated.Value(1))).current;

  const handlePress = (id) => {
    let index = todolist.findIndex((item) => item.id === id);
    if (index === -1) return;
    let copylist = todolist.map((item, idx) => {
      if (item.isTouched && idx !== index) return { ...item, isTouched: false };
      if (idx === index) return { ...item, isTouched: !item.isTouched };
      return item;
    });

    setTodolist(copylist);
  };

  const checkPress = (id) => {
    let index = todolist.findIndex((item) => item.id === id);
    let copylist = [...todolist];
    copylist[index].isChecked = !copylist[index].isChecked;
    setTodolist(copylist);
  };

  const renderItem = ({ item, index }) => (
    <Animated.View
      style={[styles.item, { opacity: animatedValues[index] }]}
    >
      <Notification
        key={item.id}
        {...item}
        handlePress={() => handlePress(item.id)}
        checkPress={() => checkPress(item.id)}
        openRowKey={openRowKey}
      />
    </Animated.View>
  );

  const [openRowKey, setOpenRowKey] = useState(null);

  const onRowOpen = (rowKey) => {
    setOpenRowKey(rowKey);
  };

  const onRowClose = () => {
    setOpenRowKey(null);
  };

  const deleteNotification = (rowMap, id) => {
    let index = todolist.findIndex((todo) => todo.id === id);
    if (index === -1) return;
  
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  
    Animated.parallel([
      Animated.timing(animatedValues[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(hiddenAnimatedValues[index], {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start(() => {
      setTodolist(prevTodolist => prevTodolist.filter(todo => todo.id !== id));
      animatedValues[index] = new Animated.Value(1);
      hiddenAnimatedValues[index] = new Animated.Value(1);
    });
  };

  const popAdd = () => {
    setAddVisible(true);
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
        <TouchableOpacity style={styles.plus} onPress={popAdd}>
          <Icon style={styles.plusIcon} name="plus" size={20} color="#6E3BFF" />
        </TouchableOpacity>
      }
      renderHiddenItem={(data, rowMap) => (
        <Animated.View style={[styles.deleteBtn, { opacity: hiddenAnimatedValues[data.index] }]}>
          <TouchableOpacity onPress={() => deleteNotification(rowMap, data.item.id)}>
            <View style={styles.deleteItem}>
              <Icon
                name="trash"
                size={18}
                color="#fff"
                style={styles.deleteIcon}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
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
    width: 254,
    height: 42,
    borderRadius: 32,
    backgroundColor: "#6E3BFF",
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 1,
    marginBottom: 0.5,
  },
  deleteIcon: {
    marginRight: 17.5,
  },
});

export default NotificationList;
