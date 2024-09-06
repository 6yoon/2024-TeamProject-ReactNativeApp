import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import cancelIcon from '../../../public/images/cancel1.png';


function DiaryDetail({ route, navigation }) {
  const { diary } = route.params; 

  return (
    <View style={styles.container}>
        <Text style={styles.headerTitle}>일기 상세</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
        <Image source={cancelIcon} style={styles.cancelIcon} />
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <Text style={styles.detaildate}>{diary.date}</Text>
        <Text style={styles.detailtitle}>{diary.title}</Text>
        <Text style={styles.detailcontent}>{diary.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop:10,
  },

  cancelIcon: {
    width: 19,
    height: 19,
    marginLeft:16,
    marginTop: 10,
  },

  detailContainer: {
    marginBottom: 30,
  },

  detaildate: {
    fontSize:16,
    color: '#999999',
    marginTop:40,
    marginLeft:16,
  },

  detailtitle:{
    marginLeft:16,
    fontWeight:'bold',
    fontSize:18,
    marginTop:30,
 },

 detailcontent:{
    marginLeft:16,
    marginTop:40,
 },

//   backButton: {
//     backgroundColor: '#6E3BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//   },

//   backButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
});

export default DiaryDetail;
