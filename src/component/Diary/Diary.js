import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import plusIcon from '../../../public/images/plus.png';

function Diary({ route, navigation }) {
  const [diaries, setDiaries] = useState([]);  // 일기 데이터 배열

  // route에서 전달받은 새로운 일기 데이터를 배열에 추가
  if (route.params?.date && route.params?.title && route.params?.content) {
    const newDiary = {
      id: Date.now().toString(),  // 고유 ID 생성
      date: route.params.date,
      title: route.params.title,
      content: route.params.content,
    };
    setDiaries([...diaries, newDiary]);  
    route.params = {};
  }

  const moveAddDiary = () => {
    navigation.navigate('addDiary');
  };

  const renderDiaryItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('diaryDetail', { diary: item })}>
      <View style={styles.diarylist}>
        <View style={styles.listdatebox}>
          <Text style={styles.listdatemonth}>{item.date.substring(5, 7)}월</Text>
          <Text style={styles.listdateday}>{item.date.substring(8, 10)}일</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listtitle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.diary}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>일기장</Text>
      </View>


      <FlatList
        data={diaries}
        renderItem={renderDiaryItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptydiaryText}>오늘의 이야기를 기록해 보세요.</Text>}
      />

      <TouchableOpacity onPress={moveAddDiary}>
        <Image source={plusIcon} style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  diary: {
    backgroundColor: "#fff",
    flex: 1,
  },
  titlebox: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  emptydiaryText: {
    color: "#BBBBBB",
    textAlign: "center",
    marginTop: 20,
  },
  plusIcon: {
    width: 47,
    height: 47,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  diarylist: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },
  listdatebox: {
  },
  listdatemonth: {
    fontSize: 16,
    marginTop: 6,
  },
  listdateday: {
    fontSize: 16,
  },
  listtitle: {
    fontSize: 16,
    marginLeft: 25,
    marginTop: 15,
  },
  list: {
    backgroundColor: '#f5f5f5',
    width: 290,
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
  }
});

export default Diary;
