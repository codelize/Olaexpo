import React from 'react';
import { TextInput } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function Input({ placeholder, secureTextEntry, keyboardType }) {
  return (
    <TextInput
      style={GlobalStyles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
}


