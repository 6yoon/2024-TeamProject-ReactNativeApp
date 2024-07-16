import { useRef } from "react";
import { Animated } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Time() {
  const time = [];
  for (let i = 0; i < 24; i++) {
    const timeText = i < 10 ? `0${i}:00` : `${i}:00`;
    if (i < 23) {
      time.push(
        <>
          <Text style={styles.timeText}>{timeText}</Text>
          <View style={styles.lineBox}>
            <View style={styles.line}></View>
            <View style={styles.dot}></View>
            <View style={styles.line}></View>
          </View>
        </>
      );
    } else {
      time.push(
        <>
          <Text style={styles.timeText}>{timeText}</Text>
        </>
      );
    }
  }
  return time;
}

function Timeline() {
  const scrolling = useRef(new Animated.Value(0)).current;
  const onScroll = (e) => {
    const position = e.nativeEvent.contentOffset.y;

    scrolling.setValue(position);
  };

  return (
    <Animated.ScrollView
      scrollEventThrottle={10}
      onScroll={onScroll}
      style={styles.timeline}
      showsVerticalScrollIndicator={false}
    >
      <Time></Time>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  timeline: {
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    borderStyle: "solid",
    height: 380,
    marginRight: 10,
  },
  timeText: {
    marginBottom: 6,
    color: "#aaa",
    fontWeight: "bold",
    fontSize: 12,
  },
  lineBox: {
    width: 37,
    height: 30,
    alignItems: "center",
    marginBottom: 6,
  },
  line: {
    width: 1,
    height: 14,
    backgroundColor: "#aaa",
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#aaa",
    borderRadius: 50,
  },
});

export default Timeline;
