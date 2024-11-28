import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import VagasScreen from '../screens/VagasScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import DetalhesVagaScreen from '../screens/DetalhesVagaScreen';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';
import CadastroVagaScreen from '../screens/CadastroVagaScreen';

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Vagas" component={VagasScreen} />
  <Tab.Screen name="Detalhes" component={DetalhesVagaScreen} />
  <Tab.Screen name="Cadastrar Vaga" component={CadastroVagaScreen} />
  <Tab.Screen name="Configurações" component={ConfiguracoesScreen} />
</Tab.Navigator>;

const Tab = createBottomTabNavigator();

export const AppRoutes = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Vagas" component={VagasScreen} />
    <Tab.Screen name="Perfil" component={EditProfileScreen} />
  </Tab.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

