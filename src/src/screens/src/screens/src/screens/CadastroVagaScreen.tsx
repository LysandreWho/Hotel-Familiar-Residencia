import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const CadastroVagaScreen = () => {
  const [form, setForm] = useState({
    quarto: '',
    valor: '',
    camas: '',
    arCondicionado: false,
    refeicoes: false,
    descricao: '',
    contato: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.post('/vagas', form);
      Alert.alert('Sucesso', 'Vaga cadastrada com sucesso!');
      setForm({
        quarto: '',
        valor: '',
        camas: '',
        arCondicionado: false,
        refeicoes: false,
        descricao: '',
        contato: '',
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar a vaga.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Vaga</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do quarto"
        value={form.quarto}
        onChangeText={(text) => handleInputChange('quarto', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor da estadia"
        value={form.valor}
        onChangeText={(text) => handleInputChange('valor', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de camas"
        value={form.camas}
        onChangeText={(text) => handleInputChange('camas', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do quarto"
        value={form.descricao}
        onChangeText={(text) => handleInputChange('descricao', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de WhatsApp"
        value={form.contato}
        onChangeText={(text) => handleInputChange('contato', text)}
        keyboardType="phone-pad"
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

export default CadastroVagaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});
