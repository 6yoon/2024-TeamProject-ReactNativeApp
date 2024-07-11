import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import mypage from "../../public/images/mypage.png";
import home from "../../public/images/home.png";
import calendar from "../../public/images/calendar.png";
import diary from "../../public/images/diary.png";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={home} style={styles.img}></Image>
      <Image source={calendar} style={styles.img}></Image>
      <Image source={diary} style={styles.img}></Image>
      <Image source={mypage} style={styles.img}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  img: {
  }
});

export default Footer;
