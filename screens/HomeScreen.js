import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem de fundo: circle */}
      <Image
        style={styles.circleImg}
        source={require('../assets/Circle.png')}
        resizeMode="cover"
      />

      {/* Elipse sobreposta */}
      <Image
        style={styles.ellipseImg}
        source={require('../assets/Ellipse.png')} // Certifique-se de que essa imagem esteja no caminho correto
        resizeMode="cover"
      />

      {/* Logo */}
      <Image
        source={require('../assets/LogoAgroCare.png')}
        style={styles.smallLogoImg}
      />

      {/* Texto do slogan */}
      <Text style={styles.subtitle}>
        Faça parte da nova{"\n"}geração agropecuarista{"\n"}do Brasil!
      </Text>

      {/* Botões */}
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
    zIndex: 1, // A logo deve estar acima das imagens
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Courier',
    padding: 10,
    textAlign: 'left',
    marginVertical: 20,
    width: '80%',
    lineHeight: 28,
    zIndex: 1, // O texto também deve estar acima das imagens
  },
  btn: {
    backgroundColor: '#41784C',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 1, // Botões sobre as imagens
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    
  },
  circleImg: {
    width: '200%',
    height: '130%',
    position: 'absolute',
    top: 200,
    opacity: 425,
    zIndex: 0, // Definimos a imagem circle como o fundo
  },
  ellipseImg: {
    width: '150%', // Ajuste da largura para deixar com proporções semelhantes
    height: '70%', // Ajuste da altura para se assemelhar à imagem
    top: 800, // Ajuste de posicionamento vertical
    left: 50, // Ajuste para posicionamento lateral (esquerda)
    transform: [{ rotate: '-2deg' }], // Girando a elipse para ficar inclinada
    zIndex: 1, 
  },
});
