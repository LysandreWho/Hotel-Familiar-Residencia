import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Linking } from 'react-native';
import api from '../api';
import { Vaga } from '../types';

const VagasScreen = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get('/vagas');
        setVagas(response.data);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    };

    fetchVagas();
  }, []);

  const renderItem = ({ item }: { item: Vaga }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Quarto: {item.quarto}</Text>
      <Text>Ocupado: {item.ocupacao ? 'Sim' : 'Não'}</Text>
      <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
      <Text>Camas: {item.camas}</Text>
      <Text>Ar-condicionado: {item.arCondicionado ? 'Sim' : 'Não'}</Text>
      <Text>Refeições inclusas: {item.refeicoes ? 'Sim' : 'Não'}</Text>
      <Text>Descrição: {item.descricao}</Text>
      {!item.ocupacao && (
        <Button
          title="Entrar em contato"
          onPress={() => Linking.openURL(`https://wa.me/${item.contato}`)}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {vagas.length > 0 ? (
        <FlatList
          data={vagas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.message}>Não há vagas disponíveis no momento.</Text>
      )}
    </View>
  );
};

export default VagasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
  },
});
