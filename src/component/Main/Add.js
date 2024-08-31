import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TimeDate from "./TimeDate";
import {
  AllDayItem,
  TagItem,
  LocationItem,
  InviteItem,
  AlarmItem,
  MemoItem,
} from "./Items";

const itemBox = [
  { id: "0", component: TimeDate },
  { id: "1", component: AllDayItem },
  { id: "2", component: TagItem },
  { id: "3", component: AlarmItem },
  { id: "4", component: MemoItem },
];

function Add({ addVisible, setAddVisible, todolist, setTodolist, idRef }) {
  const [isAllDay, setIsAllDay] = useState(false);
  const [noTime, setNoTime] = useState("none");
  const renderItem = ({ item }) => {
    const Component = item.component;
    return (
      <Component
        isAllDay={isAllDay}
        setIsAllDay={setIsAllDay}
        noTime={noTime}
        setNoTime={setNoTime}
        newStartTime={newStartTime}
        setNewStartTime={setNewStartTime}
        newEndTime={newEndTime}
        setNewEndTime={setNewEndTime}
        setNewTag={setNewTag}
        setNewAlarm={setNewAlarm}
        newMemo={newMemo}
        setNewMemo={setNewMemo}
      />
    );
  };

  let [newContent, setNewContent] = useState("");
  let [newStartTime, setNewStartTime] = useState([]);
  let [newEndTime, setNewEndTime] = useState([]);
  let [newTag, setNewTag] = useState("");
  let [newAlarm, setNewAlarm] = useState("");
  let [newMemo, setNewMemo] = useState("");

  function saveInfo() {
    let newTodolist = {
      id: idRef.current,
      isChecked: false,
      isTouched: false,
      content: newContent,
      startTime: newStartTime,
      endTime: newEndTime,
      tag: newTag,
      alarm: newAlarm,
      memo: newMemo,
    };
    setTodolist([...todolist, newTodolist]);
    idRef.current += 1;
  }

  const handlePress = () => {
    setAddVisible(!addVisible); // 기존의 상태 토글
    saveInfo();
  };

  return (
    <Modal transparent={true} visible={addVisible} animationType="fade">
      <View style={styles.addBackground}></View>
      <Modal transparent={true} visible={addVisible} animationType="slide">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.add}
        >
          <TouchableOpacity
            style={styles.touchBox}
            onPress={() => setAddVisible(!addVisible)}
          ></TouchableOpacity>
          <View style={styles.addBox}>
            <View style={styles.titleBox}>
              <TouchableOpacity onPress={() => setAddVisible(!addVisible)}>
                <Icon name="close" size={30}></Icon>
              </TouchableOpacity>
              <Text style={styles.title}>새로운 이벤트</Text>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => handlePress()}
              >
                <Text style={styles.saveText}>완료</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="제목"
              placeholderTextColor="#ccc"
              onChangeText={setNewContent}
              style={styles.titleInput}
            />
            <FlatList
              data={itemBox}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.itemBox}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addBackground: {
    backgroundColor: "#0000002f",
    height: "100%",
    width: "100%",
  },
  add: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  touchBox: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: 0,
  },
  addBox: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
  },
  titleBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  saveBtn: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    backgroundColor: "#6E3BFF",
    borderRadius: 24,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
  titleInput: {
    width: "100%",
    borderStyle: "solid",
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 16,
    padding: 6,
  },
  itemBox: {
    paddingTop: 26,
  },
  allDayItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Add;
