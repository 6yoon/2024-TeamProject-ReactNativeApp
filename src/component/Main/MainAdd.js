import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MainAdd({ route, navigation}) {
  return (<View style={styles.add}>
    <View style={styles.addBox}>
      <Text>추가</Text>
    </View>
  </View>);
}

const styles = StyleSheet.create({
    add: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: "#0000002f",
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    addBox: {
        backgroundColor: "#fff",
        width: "100%",
        height: "85%",
        borderRadius: 32,

    },
});

export default MainAdd;
