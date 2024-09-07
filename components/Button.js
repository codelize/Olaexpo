import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity style={GlobalStyles.btn} onPress={onPress}>
      <Text style={GlobalStyles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
