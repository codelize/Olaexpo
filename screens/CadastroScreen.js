// screens/CadastroScreen.js
import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function CadastroScreen() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <TextInput placeholder="Primeiro Nome" style={GlobalStyles.input} />
      <TextInput placeholder="Email ou Número de Telefone" style={GlobalStyles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={GlobalStyles.input} secureTextEntry />
      
      <TouchableOpacity style={GlobalStyles.btn}>
        <Text style={GlobalStyles.btnText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
