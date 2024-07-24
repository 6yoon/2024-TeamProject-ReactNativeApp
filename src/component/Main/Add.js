import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function Add({ addVisible, setAddVisible }) {
  return (
    <>
      <Modal transparent={true} visible={addVisible} animationType="fade">
        <View style={styles.addBackground}></View>

        <Modal transparent={true} visible={addVisible} animationType="slide">
          <View style={styles.add}>
            <View style={styles.addBox}>
              <View style={styles.titleBox}>
                <TouchableOpacity onPress={() => setAddVisible(!addVisible)}>
                  {<Icon name="close" size={30}></Icon>}
                </TouchableOpacity>
                <Text style={styles.title}>새로운 이벤트</Text>
                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => setAddVisible(!addVisible)}
                >
                  <Text style={styles.saveText}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  addBackground: {
    backgroundColor: "#0000002f",
    height: "100%",
  },
  add: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addBox: {
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    borderRadius: 32,
    paddingTop:16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
  },
  titleBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    /* borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1, */
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  saveBtn: {
    paddingTop:8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    backgroundColor: "#6E3BFF",
    borderRadius: 24,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export default Add;
