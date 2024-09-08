import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function CadastroScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <TextInput placeholder="Primeiro Nome" style={styles.input} />
          <TextInput
            placeholder="Email ou Número de Telefone"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
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
});
