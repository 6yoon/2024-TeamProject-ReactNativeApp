import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

function Edit({ navigation }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleSave = () => {
    // Add your save logic here (e.g., send the updated information to your server)
    console.log('Name:', name);
    console.log('Phone Number:', tel);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력하세요"
      />
      <Text style={styles.label}>전화번호</Text>
      <TextInput
        style={styles.input}
        value={tel}
        onChangeText={setTel}
        placeholder="전화번호를 입력하세요"
        keyboardType="phone-pad"
      />
      <Button title="저장" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Edit;
