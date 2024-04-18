import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.link}>Home</Text>
      <Text style={styles.link}>Home</Text>
      <Text style={styles.link}>Home</Text>
      <Text style={styles.link}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 83,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc'
  },
  link: {
    marginTop: 36,
    fontSize: 10,
    fontWeight: 'medium',
    color: '#333',
  },
});

export default Footer;
