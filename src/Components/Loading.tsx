import { Center, Spinner } from 'native-base'

export function Loading() {
    return (
        <Center color="gray.700" flex={1}>
            <Spinner color={'secondaty.700'} />
        </Center>
    )
}