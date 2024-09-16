// components/Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Agro')}>
        <MaterialIcons name="home" size={24} color="#fff" />
        <Text style={styles.menuText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Manutencao')}>
        <MaterialIcons name="work" size={24} color="#fff" />
        <Text style={styles.menuText}>Atividades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Manutencao')}>
        <MaterialIcons name="forum" size={24} color="#fff" />
        <Text style={styles.menuText}>Conversas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <MaterialIcons name="person" size={24} color="#fff" />
        <Text style={styles.menuText}>Preferências</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 3,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#1E4B2A',
        borderRadius: 20,
      },
      menuItem: {
        alignItems: 'center',
        paddingBottom: 25,
      },
      menuText: {
        color: '#fff',
        fontSize: 16,
      },
});
