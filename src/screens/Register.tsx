import { VStack } from 'native-base';
import { useState } from 'react';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../Components/Button';
import { Header } from '../Components/Header';
import { Input } from '../Components/Input';

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setpatrimony] = useState('')
  const [description, setdescription] = useState('')

  const navigation = useNavigation();

  const handleNewOrder = () => {
    if (!patrimony || !description) {
      return Alert.alert('Registrar', 'Preencha todos os campos.')
    }

    setIsLoading(true)

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then((response) => {
        console.log('Solicitação criada!', response)
        Alert.alert('Registrar', 'Solicitação registrada com sucesso.')
        navigation.goBack()
      })
      .catch((error) => {
        console.log('firestore add error: ', error)
        setIsLoading(false)
        return Alert.alert('Registrar', 'Não foi possível registrar a solicitação.')
      })
  }

  return (
    <VStack flex={1} p={6} bg='gray.600'>
      <Header title='Nova solicitação' />
      <Input
        placeholder='Número do patrimônio'
        mt={4}
        onChangeText={setpatrimony}
      />
      <Input
        placeholder='Descrição do problema'
        flex={1}
        mt={5}
        multiline
        textAlignVertical='top'
        onChangeText={setdescription}
      />

      <Button
        title='Cadastrar'
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrder}
      />
    </VStack>
  );
}