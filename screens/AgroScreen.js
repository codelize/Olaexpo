import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícones adicionais

export default function AgroScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('Login'); // Redireciona para a tela de login
  };

  const handleViewMore = () => {
    navigation.navigate('Atividades'); // Redireciona para a tela de atividades
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={require('../assets/LogoAgroCare.png')} style={styles.logo} />
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/farmer/male' }} 
            style={styles.avatar}
          />
          <Text style={styles.userName}>Olá, Agropecuarista</Text>
          <Text style={styles.userLocation}>📍 São Paulo, SP</Text>
        </View>

        {/* Cards Section */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Animais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>81</Text>
            <Text style={styles.cardLabel}>Consultas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>21</Text>
            <Text style={styles.cardLabel}>Saúde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Vidas</Text>
          </TouchableOpacity>
        </View>

        {/* Alerts Section */}
        <View style={styles.alertsContainer}>
          <Text style={styles.sectionTitle}>Alertas Recentes</Text>
          <View style={styles.alertItem}>
            <Ionicons name="warning" size={24} color="#ff4757" />
            <Text style={styles.alertText}>2 animais com suspeita de febre aftosa.</Text>
          </View>
          <View style={styles.alertItem}>
            <Ionicons name="alert-circle" size={24} color="#FFA500" />
            <Text style={styles.alertText}>Estoque de vacinas abaixo do esperado.</Text>
          </View>
        </View>

        {/* Graph Section */}
        <View style={styles.graphContainer}>
          <Text style={styles.sectionTitle}>Desempenho de Saúde</Text>
          <View style={styles.graphPlaceholder}>
            <Text style={styles.graphText}>[Gráfico de Saúde Aqui]</Text>
          </View>
        </View>

        {/* Recent Consultations - Updated Design */}
        <View style={styles.recentConsultationsContainer}>
          <Text style={styles.sectionTitle}>Últimos Atendimentos</Text>

          {/* Histórico 1 */}
          <View style={styles.consultationItem}>
            <View style={styles.consultationAvatarContainer}>
              <Ionicons name="paw" size={24} color="#68D391" />
            </View>
            <View style={styles.consultationDetails}>
              <Text style={styles.consultationTitle}>Consulta de bovino #123</Text>
              <Text style={styles.consultationDate}>10/10/2024</Text>
              <Text style={styles.consultationSummary}>Bovino apresentou sinais de febre.</Text>
            </View>
          </View>

          {/* Histórico 2 */}
          <View style={styles.consultationItem}>
            <View style={styles.consultationAvatarContainer}>
              <Ionicons name="paw" size={24} color="#68D391" />
            </View>
            <View style={styles.consultationDetails}>
              <Text style={styles.consultationTitle}>Vacinação geral aplicada</Text>
              <Text style={styles.consultationDate}>09/10/2024</Text>
              <Text style={styles.consultationSummary}>Vacinas preventivas aplicadas no rebanho.</Text>
            </View>
          </View>

          {/* Histórico 3 */}
          <View style={styles.consultationItem}>
            <View style={styles.consultationAvatarContainer}>
              <Ionicons name="paw" size={24} color="#68D391" />
            </View>
            <View style={styles.consultationDetails}>
              <Text style={styles.consultationTitle}>Consulta de bovino #124</Text>
              <Text style={styles.consultationDate}>12/10/2024</Text>
              <Text style={styles.consultationSummary}>Agendado para verificação de saúde.</Text>
            </View>
          </View>

          {/* Histórico 4 */}
          <View style={styles.consultationItem}>
            <View style={styles.consultationAvatarContainer}>
              <Ionicons name="paw" size={24} color="#68D391" />
            </View>
            <View style={styles.consultationDetails}>
              <Text style={styles.consultationTitle}>Consulta de bovino #125</Text>
              <Text style={styles.consultationDate}>15/10/2024</Text>
              <Text style={styles.consultationSummary}>Exame de rotina realizado.</Text>
            </View>
          </View>

          {/* Botão Ver Mais */}
          <View style={styles.viewMoreContainer}>
            <TouchableOpacity style={styles.viewMoreButton} onPress={handleViewMore}>
              <Text style={styles.viewMoreText}>Ver Mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions Button */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Icon name="add" size={30} color="#fff" />
            <Text style={styles.quickActionText}>Ação Rápida</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103F19',
  },
  scrollContainer: {
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#1A543F',
    padding: 25,
    borderRadius: 15,
    elevation: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userLocation: {
    color: '#A8DAB5',
    fontSize: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#1E4B2A',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#A8DAB5',
    fontSize: 16,
    marginTop: 5,
  },
  alertsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#1A543F',
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  alertText: {
    color: '#fff',
    marginLeft: 10,
  },
  graphContainer: {
    marginBottom: 20,
  },
  graphPlaceholder: {
    backgroundColor: '#1E4B2A',
    borderRadius: 10,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  graphText: {
    color: '#fff',
    fontSize: 16,
  },
  recentConsultationsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  consultationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#1A543F',
    borderRadius: 15,
    elevation: 3,
  },
  consultationAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
    borderRadius: 40,
    width: 50,
    height: 50,
  },
  consultationDetails: {
    marginLeft: 15,
    flex: 1,
  },
  consultationTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  consultationDate: {
    color: '#A8DAB5',
    fontSize: 14,
    marginTop: 3,
  },
  consultationSummary: {
    color: '#A8DAB5',
    fontSize: 13,
    marginTop: 3,
  },
  viewMoreContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  viewMoreButton: {
    backgroundColor: '#68D391',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  viewMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickActionsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  quickActionButton: {
    flexDirection: 'row',
    backgroundColor: '#68D391',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    elevation: 3,
  },
  quickActionText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
