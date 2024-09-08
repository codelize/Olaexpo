import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, secureTextEntry, keyboardType }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ececec',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 18,
  },
});
