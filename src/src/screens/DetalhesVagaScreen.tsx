import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Vaga } from '../types';

type DetalhesVagaScreenProps = {
  route: RouteProp<{ params: { vaga: Vaga } }, 'params'>;
};

const DetalhesVagaScreen: React.FC<DetalhesVagaScreenProps> = ({ route }) => {
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quarto: {vaga.quarto}</Text>
      <Text>Ocupado: {vaga.ocupacao ? 'Sim' : 'Não'}</Text>
      <Text>Valor: R$ {vaga.valor.toFixed(2)}</Text>
      <Text>Camas: {vaga.camas}</Text>
      <Text>Ar-condicionado: {vaga.arCondicionado ? 'Sim' : 'Não'}</Text>
      <Text>Refeições inclusas: {vaga.refeicoes ? 'Sim' : 'Não'}</Text>
      <Text>Descrição: {vaga.descricao}</Text>
      {!vaga.ocupacao && (
        <Button
          title="Entrar em contato"
          onPress={() => Linking.openURL(`https://wa.me/${vaga.contato}`)}
        />
      )}
    </View>
  );
};

export default DetalhesVagaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
