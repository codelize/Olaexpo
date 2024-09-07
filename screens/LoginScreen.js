// screens/LoginScreen.js
import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function LoginScreen() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <TextInput placeholder="Email ou Número de Telefone" style={GlobalStyles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={GlobalStyles.input} secureTextEntry />
      
      <TouchableOpacity style={GlobalStyles.btn}>
        <Text style={GlobalStyles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
