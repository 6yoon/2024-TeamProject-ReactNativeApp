import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import plusIcon from '../../../public/images/plus.png';

function Diary({navigation}) {
  const moveAddDiary = () => {
    navigation.navigate('AddDiary');

}

  return (
    <View style={styles.diary}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>일기장</Text>
      </View>
      <View style={styles.emptydiary}>
        <Text style={styles.emptydiaryText}>오늘의 이야기를 기록해보세요.</Text>
      </View>
      <TouchableOpacity onPress= {moveAddDiary}> 
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
  emptydiary: {
    alignItems: "center",
    marginTop: 318,
  },
  emptydiaryText: {
    color: "#BBBBBB",
  },
  plusIcon: {
    width: 47,
    height: 47,
    marginTop: 252,
    marginLeft: 317,
  },
});

export default Diary;
