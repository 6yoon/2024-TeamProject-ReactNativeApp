import React, { useRef } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";

const generateTimeData = () => {
  const timeData = [];
  for (let i = 0; i < 25; i++) {
    const timeText = i < 10 ? `0${i}:00` : `${i}:00`;
    timeData.push({
      key: `${i}`,
      timeText,
      isLast: i === 24,
    });
  }
  return timeData;
};

const checkTouched = (todolist) => {
  let flag = false;
  let time = ["", ""];
  todolist.map((item) => {
    if (item.isTouched === true) {
      flag = true;
      if (item.time[0] < 10) time[0] = `0${item.time[0]}:00`;
      else time[0] = `${item.time[0]}:00`;
      if (item.time[1] < 11) time[1] = `0${item.time[1]}:00`;
      else time[1] = `${item.time[1]}:00`;
    }
  });
  return { flag, time };
};

const timeData = generateTimeData();

const TimeItem = ({ timeText, isLast, todolist }) => {
  const isHighlighted =
    (timeText === checkTouched(todolist).time[0] &&
      checkTouched(todolist).flag) ||
    (timeText === checkTouched(todolist).time[1] &&
      checkTouched(todolist).flag);
  return (
    <View>
      <Text
        style={[styles.timeText, isHighlighted && styles.highlightedTimeText]}
      >
        {timeText}
      </Text>
      {!isLast && (
        <View style={styles.lineBox}>
          <View style={styles.line}></View>
          <View style={styles.dot}></View>
          <View style={styles.line}></View>
        </View>
      )}
    </View>
  );
};

function Timeline({ todolist }) {
  const scrolling = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
    { useNativeDriver: false }
  );

  return (
    <Animated.FlatList
      data={timeData}
      renderItem={({ item }) => (
        <TimeItem
          todolist={todolist}
          timeText={item.timeText}
          isLast={item.isLast}
        />
      )}
      keyExtractor={(item) => item.key}
      scrollEventThrottle={10}
      onScroll={onScroll}
      style={styles.timeline}
      showsVerticalScrollIndicator={false}
      contentOffset={{ y: 0 }}
    />
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
  highlightedTimeText: {
    marginBottom: 6,
    color: "#6E3BFF",
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
