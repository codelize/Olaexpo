import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import AgroScreen from '../screens/AgroScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import KeyboardDismissWrapper from '../components/KeyboardDismissWrapper'; // Importar o KeyboardDismissWrapper

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Agro"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Agro') {
            iconName = 'home';
          } else if (route.name === 'Atividades') {
            iconName = 'briefcase-outline'; 
          } else if (route.name === 'Chat') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: '#1E4B2A' }, 
      })}
      tabBarOptions={{
        activeTintColor: '#1E4B', 
        inactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen name="Agro" component={AgroScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Atividades" component={MaintenanceScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat" component={MaintenanceScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

// Stack Navigation para Loading, Login, Cadastro, Home
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <KeyboardDismissWrapper>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </KeyboardDismissWrapper>
    </NavigationContainer>
  );
}
