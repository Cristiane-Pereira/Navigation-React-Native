import App from 'react'
import {View, Text} from 'react-native';

const Informations = ({route}) => {
  return(
    <View style={{flex: 1, margin: 30}}>
        <Text>Nome:{ route.params?.nome }</Text>
        <Text>Telefone: { route.params?.telefone }</Text>
        <Text>Endereço: { route.params?.endereco }</Text>
        <Text>N°: { route.params?.n }</Text>
        <Text>Profissão: { route.params?.profissao }</Text>
        <Text>Email: { route.params?.email }</Text>
    </View>
  )
}

export default Informations;
