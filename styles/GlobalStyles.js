import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Para alinhar os botões na parte inferior
    alignItems: 'center',
    backgroundColor: '#103F19', // Fundo verde escuro conforme a imagem
    paddingBottom: 40, // Adiciona espaço inferior para os botões
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
    marginVertical: 20,
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
  img: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 20,
  },
  // Estilo para LoadingScreen
  loadingImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 320,
    height: 100,
    position: 'absolute',
    zIndex: 1, // Coloca a logo acima da imagem de fundo
  },
  circleImg: {
    width: '100%', // Preenche toda a largura da tela
    height: '100%', // Preenche toda a altura da tela
    position: 'absolute',
    top: 10, // Alinha no topo da tela
    left: -210, // Alinha à esquerda da tela
    opacity: 0.5, // Torna a imagem um pouco transparente
    zIndex: 0, // Coloca a imagem de fundo abaixo da logo
  },
  smallLogoImg: {
    width: 350, // Largura da logo
    height: 100,  // Altura da logo
    marginBottom: 200, // Espaçamento entre a logo e os botões
  },
  footerButtons: {
    position: 'absolute', // Posiciona os botões no fundo da tela
    bottom: 30, // Define a distância do fundo da tela
    width: '100%', // Largura completa da tela
    alignItems: 'center', // Alinhamento dos botões ao centro
  },
  // Novos estilos para HomeScreen
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Espaço extra no topo para a logo
  },
  logoImgHome: {
    width: 200,  // Ajuste conforme o tamanho da logo
    height: 100, // Altura da logo, ajuste se necessário
    resizeMode: 'contain',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16, // Tamanho do texto mais próximo possível da imagem
    textAlign: 'center',
    marginBottom: 30, // Espaçamento entre o texto e os botões
  },
  btnHome: {
    backgroundColor: '#41784C', // Cor do botão verde
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10, // Espaçamento entre os botões
  },
});
