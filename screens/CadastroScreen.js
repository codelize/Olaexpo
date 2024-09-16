import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (primeiroNome && email && senha) {
      // Armazene os dados do usuário no AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify({ primeiroNome, email, senha }));

      // Redireciona para a tela AgroScreen após o cadastro
      navigation.navigate('Agro');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TextInput
            placeholder="Primeiro Nome"
            style={styles.input}
            value={primeiroNome}
            onChangeText={setPrimeiroNome}
          />
          <TextInput
            placeholder="Email ou Número de Telefone"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          
          <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#103F19',
    paddingBottom: 40,
  },
  input: {
    backgroundColor: '#ececec',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#41784C',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  backBtn: {
    backgroundColor: '#41771F', 
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
});
