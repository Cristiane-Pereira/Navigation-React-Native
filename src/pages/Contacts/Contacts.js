import App from "react";
import { View, Text } from "react-native";

const Contacts = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: 30 }}>
      <View style={{}}>
        <Text>Nome: Cristiane Pereira da Silva</Text>
        <Text>Telefone: (11)96789-0976</Text>
        <Text style={{color: 'red'}} onPress={() => navigation.navigate("Information", {
            nome: 'Cristiane Pereira da Silva',
            telefone: '(11)96789-0976',
            endereco: 'Rua das Flores',
            n: 29,
            profissao: "Desenvolvedora de sofware",
            email: 'cris@gmail.com'

        })} >
          informação de contato ...
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text>Nome: Vitor Gabriel Pereira da Silva</Text>
        <Text>Telefone: (11)97689-3455</Text>
        <Text onPress={() => navigation.navigate("Information")} style={{color: 'red'}}>
          exemple de null safity ...
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text>Nome: Elseo de Olveira</Text>
        <Text>Telefone: (11)99876-9999</Text>
        <Text onPress={() => navigation.navigate("Information", {
            nome: 'Elseo de Olveira',
            telefone: '11)99876-9999',
            endereco: 'Rua das Aves',
            n: 1000,
            profissao: "Segurança",
            email: 'elseo897@gmail.com'

        })} style={{color: 'red'}}>
          informação de contato ...
        </Text>
      </View>
    </View>
  );
};

export default Contacts;
