import { useNavigation, useRoute } from '@react-navigation/native';
import { VStack, useTheme, ScrollView, Box } from 'native-base';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore'
import { CircleWavyCheck, ClipboardText, DesktopTower } from 'phosphor-react-native';

import { Header } from '../Components/Header';
import { OrderProps } from '../Components/Order';
import { OrderFirestoreDTO } from '../DTOs/OrderFirestoreDTO';
import { dateFormat } from '../utils/firestoreFormatter';
import { Loading } from '../Components/Loading';
import { CardDetail } from '../Components/CardDetail';
import { Input } from '../Components/Input';
import { Button } from '../Components/Button';
import { Alert } from 'react-native';

type RouteParams = {
    orderId: string,
}

type OrderDetails = OrderProps & {
    description: string,
    solution: string,
    closed: string,
}

export function Details() {
    const [solution, setSolution] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState<OrderDetails>({} as OrderDetails)

    const navigation = useNavigation()
    const route = useRoute()

    const { orderId } = route.params as RouteParams

    useEffect(() => {
        firestore()
            .collection<OrderFirestoreDTO>('orders')
            .doc(orderId)
            .get()
            .then(doc => {
                const { patrimony, closed_at, created_at, description, solution, status } = doc.data()

                const closed = closed_at ? dateFormat(closed_at) : null

                setOrder({
                    id: doc.id,
                    patrimony,
                    description,
                    status,
                    solution,
                    when: dateFormat(created_at),
                    closed
                })

                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    const handleOrderClose = () => {
        if (!solution) {
            return Alert.alert('Solicitação', 'Informa a solução para encerrar a solicitação');
        }

        firestore()
            .collection<OrderFirestoreDTO>('orders')
            .doc(orderId)
            .update({
                status: 'closed',
                solution,
                closed_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert('Solicitação', 'Solicitação encerrada.');
                navigation.goBack();
            })
            .catch((error) => {
                console.log('firestore update error', error);
                Alert.alert('Solicitação', 'Não foi possível encerrar a solicitação');
            });
    }

    return (
        <VStack flex={1} bg='gray.700'>
            <Box px={6} bg="gray.600">
                <Header title="Solicitação" />
            </Box>
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>
                <CardDetail
                    title="equipamento"
                    description={`Patrimônio ${order.patrimony}`}
                    icon={DesktopTower}
                />

                <CardDetail
                    title="descrição do problema"
                    description={order.description}
                    icon={ClipboardText}
                    footer={`Registrado em ${order.when}`}
                />

                <CardDetail
                    title="solução"
                    icon={CircleWavyCheck}
                    description={order.solution}
                    footer={order.closed && `Encerrado em ${order.closed}`}
                >
                    {
                        order.status === 'open' &&
                        <Input
                            placeholder="Descrição da solução"
                            onChangeText={setSolution}
                            textAlignVertical="top"
                            multiline
                            h={24}
                            bg="gray.600"
                        />
                    }
                </CardDetail>
            </ScrollView>

            {
                order.status === 'open' &&
                <Button
                    title="Encerrar solicitação"
                    m={5}
                    onPress={handleOrderClose}
                />
            }
        </VStack>
    );
}