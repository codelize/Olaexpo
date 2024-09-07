// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Agora navega para a tela de Home
    }, 4000); // 4 segundos antes da transição

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [navigation]);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={GlobalStyles.loadingImageContainer}>
        <Image
          style={GlobalStyles.circleImg} // Estilo para a imagem de fundo
          source={require('../assets/Circle.png')}
          resizeMode="cover"
        />
        <Image
          style={GlobalStyles.logoImg} // Estilo para a logo
          source={require('../assets/LogoAgroCare.png')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
