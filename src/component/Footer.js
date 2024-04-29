import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import myPage from "../../public/images/FooterMyPage.png";
import home from "../../public/images/FooterHome.png";
import claendar from "../../public/images/FooterCalendar.png";
import chat from "../../public/images/FooterChat.png";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Image source={home}></Image>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={claendar}></Image>
        <Text style={styles.link}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={chat}></Image>
        <Text style={styles.link}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={myPage}></Image>
        <Text style={styles.link}>my page</Text>
      </TouchableOpacity>
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
  link: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: 'medium',
    color: '#333',
    fontFamily: 'Pretendard6'
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Footer;
