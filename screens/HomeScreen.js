import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      {/* Logo da AgroCare substituindo o título "AGROCARE TECH" */}
      <Image
        source={require('../assets/LogoAgroCare.png')} // Certifique-se de que o caminho da logo está correto
        style={GlobalStyles.smallLogoImg} 
      />

      {/* Texto descritivo */}
      <Text style={GlobalStyles.subtitle}>
        Faça parte do novo grupo agropecuarista do Brasil!
      </Text>

      {/* Botão para navegar para a tela de Login */}
      <TouchableOpacity
        style={GlobalStyles.btn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={GlobalStyles.btnText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela de Cadastro */}
      <TouchableOpacity
        style={GlobalStyles.btn}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={GlobalStyles.btnText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
