import React, { useEffect, useRef, useState } from "react";
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

const timeData = generateTimeData();

const checkTouched = (todolist) => {
  let flag = false;
  let time = [];
  let highlighted = [];
  if (Array.isArray(todolist)) {
    todolist.map((item) => {
      if (item?.isTouched === true) {
        flag = true;
        const startHour = item.startTime[0];
        const endHour = item.endTime[0] - item.startTime[0] + 1
        for (let i = 0; i <= endHour; i++) {
          time.push(startHour + i);
        }
        time.map((hours) => {
          highlighted.push(hours < 10 ? `0${hours}:00` : `${hours}:00`);
        });
      }
    });
  }
  return { flag, highlighted, time };
};

const TimeItem = ({ timeText, isLast, todolist}) => {
  const { flag, highlighted } = checkTouched(todolist);
  const linedot = highlighted.slice(0, -1);
  return (
    <View>
      <Text
        style={[
          styles.timeText,
          highlighted.includes(timeText) && flag && styles.highlightedTimeText,
        ]}
      >
        {timeText}
      </Text>
      {!isLast && (
        <View style={styles.lineBox}>
          <View
            style={[
              styles.line,
              linedot.includes(timeText) && flag && styles.highlightedLine,
            ]}
          ></View>
          <View
            style={[
              styles.dot,
              linedot.includes(timeText) && flag && styles.highlightedDot,
            ]}
          ></View>
          <View
            style={[
              styles.line,
              linedot.includes(timeText) && flag && styles.highlightedLine,
            ]}
          ></View>
        </View>
      )}
    </View>
  );
};

function focusTime(todolist){
  let focus;
  todolist.map((item)=>{
    if(item.isTouched === true)
      focus = item.startTime[0] * 49.7;
  })
  return focus;
}

function Timeline({ todolist}) {
  const scrolling = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
    { useNativeDriver: false }
  );
  const flatListRef = useRef(null);
  
  useEffect(() => {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: focusTime(todolist),
      });
  }, [todolist]);


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
      ref={flatListRef}
    />
  );
}

const styles = StyleSheet.create({
  timeline: {
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    borderStyle: "solid",
    height: 390,
    marginRight: 10,
    width: 50,
  },
  timeText: {
    marginBottom: 6,
    color: "#aaa",
    fontWeight: "bold",
    fontSize: 10,
  },
  highlightedTimeText: {
    marginBottom: 6,
    color: "#6E3BFF",
    fontWeight: "bold",
    fontSize: 10,
  },
  lineBox: {
    width: 33,
    height: 26,
    alignItems: "center",
    marginBottom: 6,
  },
  line: {
    width: 1,
    height: 12,
    backgroundColor: "#aaa",
  },
  highlightedLine: {
    width: 1,
    height: 12,
    backgroundColor: "#6E3BFF",
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#aaa",
    borderRadius: 50,
  },
  highlightedDot: {
    width: 4,
    height: 4,
    backgroundColor: "#6E3BFF",
    borderRadius: 50,
  },
});

export default Timeline;
