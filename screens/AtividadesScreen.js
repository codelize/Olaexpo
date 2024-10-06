import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AtividadesScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleViewDetails = () => {
    navigation.navigate('Detalhes'); // Navega para a tela de Detalhes
  };

  const activityData = [
    // Dados de exemplo...
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Atividades</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {activityData.map((activity) => (
          <TouchableOpacity key={activity.id} onPress={handleViewDetails} style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Ionicons name={activity.icon} size={28} color="#68D391" />
            </View>
            <View style={styles.activityDetails}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
              <Text style={styles.activityDescription}>{activity.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Estilos da tela Atividades...
});
