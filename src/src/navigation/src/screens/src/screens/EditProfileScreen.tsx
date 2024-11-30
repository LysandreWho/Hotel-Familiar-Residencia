import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('');

  const handleSave = () => {
    console.log('Perfil atualizado para:', name);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Atualizar Nome"
        value={name}
        onChangeText={setName}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
