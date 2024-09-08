import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/LogoAgroCare.png')}
        style={styles.smallLogoImg}
      />

      <Text style={styles.subtitle}>
        Faça parte da nova geração agropecuarista do Brasil!
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.btnText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  smallLogoImg: {
    width: 350,
    height: 100,
    marginBottom: 200,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#41784C',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
