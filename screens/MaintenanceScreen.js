import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usando MaterialIcons
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';

export default function MaintenanceScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="build" size={100} color="#fff" />
      </View>
      <Text style={styles.title}>Em Manutenção</Text>
      <Text style={styles.message}>Esta funcionalidade não está disponível no momento. Por favor, tente novamente mais tarde.</Text>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()} // Navega para a tela anterior
      >
        <Text style={styles.backBtnText}>Voltar</Text>
      </TouchableOpacity>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103F19',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
  },
  backBtn: {
    backgroundColor: '#41771F', 
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  backBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
