import RNPickerSelect from "react-native-picker-select";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

let tag, alarm, memo;

export function AllDayItem({
  isAllDay,
  setIsAllDay,
  noTime,
  setNoTime,
  saveInfo,
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleAllDay = () => {
    setIsAllDay((prevState) => !prevState);
    noTime === "none" ? setNoTime("undefined") : setNoTime("none");
    Animated.timing(animatedValue, {
      toValue: isAllDay ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const touchedAllDayTouch = {
    borderColor: isAllDay ? "#6E3BFF" : "#aaa",
    width: 46,
    height: 24,
    borderRadius: 24,
    position: "relative",
    justifyContent: "center",
  };

  const touchedAllDayBtn = {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: isAllDay ? "#6E3BFF" : "#aaa",
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [2, 24], // 버튼의 이동 거리
        }),
      },
    ],
  };

  return (
    <View style={styles.allDayItem}>
      <Icon style={styles.allDayIcon} name="run" size={17} />
      <Text style={styles.allDayText}>하루종일</Text>
      <View>
        <TouchableOpacity
          style={[styles.allDayTouch, touchedAllDayTouch]}
          onPress={toggleAllDay}
          activeOpacity={1}
        >
          <Animated.View style={[styles.allDayBtn, touchedAllDayBtn]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function TagItem() {
  const [tag, setTag] = useState([
    {
      id: 0,
      content: "숙제",
      color: "#FFCD28",
      isTouched: false,
    },
    {
      id: 1,
      content: "운동",
      color: "#A5D8FA",
      isTouched: false,
    },
    {
      id: 2,
      content: "친구",
      color: "#FFBEC3",
      isTouched: false,
    },
  ]);
  return (
    <View style={styles.tagItem}>
      <Icon name="tag-outline" size={16} style={styles.tagIcon}></Icon>
      <FlatList
        data={tag}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={(id) => {
              let index = tag.findIndex((tagitem) => tagitem.id === item.id);
              if (index === -1) return;
              let copytag = tag.map((tagitem, idx) => {
                if (tagitem.isTouched && idx !== index)
                  return { ...tagitem, isTouched: false };
                if (idx === index)
                  return { ...tagitem, isTouched: !tagitem.isTouched };
                return tagitem;
              });

              setTag(copytag);
            }}
            style={[styles.tag, { backgroundColor: item.color }]}
          >
            <Text style={item.isTouched && styles.tagText}>{item.content}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={
          <TouchableOpacity style={styles.tagBtn}>
            <Icon name="plus" size={16} color={"#aaa"}></Icon>
          </TouchableOpacity>
        }
      ></FlatList>
    </View>
  );
}

export function LocationItem() {
  return (
    <View style={styles.locationItem}>
      <Icon name="map-marker" size={18} style={styles.locationIcon}></Icon>
      <TextInput placeholder="위치" style={styles.locationText}></TextInput>
    </View>
  );
}

export function InviteItem() {
  return (
    <View style={styles.inviteItem}>
      <Icon name="human-male" size={18} style={styles.inviteIcon}></Icon>
      <TextInput
        placeholder="참가자 초대"
        style={styles.inviteText}
      ></TextInput>
    </View>
  );
}

export function AlarmItem() {
  const [alarm, setAlarm] = useState("없음");
  return (
    <>
      <View style={styles.alarmItem}>
        <Icon name="bell-outline" size={18} style={styles.alarmIcon}></Icon>
        <Text style={styles.alarmText}>알림</Text>
        <View style={styles.alarmBox}>
          <View>
            <RNPickerSelect
              placeholder={{
                label: "없음",
                value: null,
              }}
              selectedValue={alarm}
              onValueChange={(value) => setAlarm(value)}
              items={[
                { label: "이벤트 시간", value: "eventTime" },
                { label: "5분 전", value: "5min" },
                { label: "10분 전", value: "10min" },
                { label: "15분 전", value: "15min" },
                { label: "30분 전", value: "30min" },
                { label: "1시간 전", value: "1h" },
                { label: "2시간 전", value: "2h" },
                { label: "1일 전", value: "1day" },
                { label: "2일 전", value: "2day" },
                { label: "1주 전", value: "1week" },
              ]}
              style={{ inputIOS: styles.alarmPicker }}
            ></RNPickerSelect>
          </View>
          <View style={styles.alarmBtn}>
            <Icon name="chevron-up" color={"#aaa"}></Icon>
            <Icon name="chevron-down" color={"#aaa"}></Icon>
          </View>
        </View>
      </View>
      <View style={styles.underline}></View>
    </>
  );
}

export function MemoItem({newMemo, setNewMemo}) {
  return (
    <View style={styles.memoItem}>
      <Icon name="text-long" size={18} style={styles.memoIcon}></Icon>
      <TextInput
        placeholder="메모"
        placeholderTextColor="#ccc"
        numberOfLines={4}
        multiline
        onChangeText={setNewMemo}
        value={newMemo}
        style={styles.memoText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  /*--------allDayItem---------*/
  allDayItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginBottom: 24,
    padding: 8,
    paddingLeft: 0,
  },
  allDayIcon: {
    marginRight: 9,
  },
  allDayText: {
    fontSize: 16,
  },
  allDayTouch: {
    borderStyle: "solid",
    borderColor: "#aaa",
    borderWidth: 1,
    width: 46,
    height: 24,
    borderRadius: 24,
    position: "relative",
    justifyContent: "center",
    left: 208,
  },
  allDayBtn: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: "#aaa",
  },

  /*--------tagItem---------*/
  tagItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  tagIcon: {
    marginRight: 10,
  },
  tag: {
    paddingLeft: 16,
    paddingRight: 16,
    padding: 4,
    borderRadius: 24,
    marginRight: 8,
  },
  tagText: {
    fontWeight: "bold",
    color: "#fff",
  },
  tagBtn: {
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    marginTop: 2.5,
  },

  /*--------locationItem---------*/
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  locationIcon: {
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
  },

  /*--------inviteItem---------*/
  inviteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  inviteIcon: {
    marginRight: 10,
  },
  inviteText: {
    fontSize: 16,
  },

  /*--------alarmItem---------*/
  alarmItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  alarmIcon: {
    marginRight: 10,
  },
  alarmText: {
    fontSize: 16,
  },
  alarmBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
  },
  alarmPicker: {
    fontSize: 16,
  },
  alarmBtn: {
    marginLeft: 2,
  },

  /*--------ㅡmemoItem---------*/
  memoItem: {
    flexDirection: "row",
    marginBottom: 24,
    borderRadius: 12,
  },
  memoIcon: {
    marginRight: 10,
    marginTop: 6,
  },
  memoText: {
    fontSize: 16,
    width: "90%",
    height: 200,
  },

  underline: {
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    borderStyle: "solid",
    position: "relative",
    bottom: 8,
    width: "100%",
  },
});
