import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
const Conditions = () => {
  const [end, setEnd] = useState(false);
  const router = useRouter();
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <ScrollView style={{ flex: 1 }} onScrollEndDrag={() => setEnd(true)}>
          <Text style={{ fontSize: 20, fontFamily: "Book" }}>
            TERMOS & CONDIÇÕES DE USO DO APLICATIVO M-PESA SMARTPHONE:
          </Text>
          <Text style={{ fontSize: 19, fontFamily: "Light" }}>
            Termos e Condições para Aplicativo de Transferência de Dinheiro
            Bem-vindo ao nosso aplicativo de transferência de dinheiro! Leia
            atentamente estes Termos e Condições antes de utilizar o nosso
            serviço. Ao utilizar o nosso serviço, você concorda com estes Termos
            e Condições. Descrição do serviço Nosso aplicativo de transferência
            de dinheiro permite que os usuários enviem e recebam dinheiro de
            forma rápida e fácil através de suas contas bancárias ou cartões de
            crédito/débito. O serviço é fornecido através de um aplicativo móvel
            que pode ser baixado gratuitamente na App Store ou Google Play.
            Registo e Conta Para utilizar o nosso serviço, os usuários devem
            criar uma conta. Ao criar uma conta, os usuários concordam em
            fornecer informações precisas e atualizadas, incluindo nome
            completo, endereço de e-mail, número de telefone e informações de
            pagamento válidas. Os usuários também devem criar uma senha segura e
            mantê-la confidencial. Os usuários são responsáveis por todas as
            atividades que ocorrem em sua conta. Envio de dinheiro Os usuários
            podem enviar dinheiro para outros usuários através do aplicativo. Os
            usuários devem fornecer informações precisas sobre o destinatário e
            o valor a ser enviado. O envio de dinheiro está sujeito a taxas, que
            serão informadas ao usuário antes do envio. Os usuários também podem
            optar por enviar dinheiro para uma conta bancária ou cartão de
            crédito/débito. Os usuários devem fornecer informações precisas
            sobre a conta bancária ou cartão de crédito/débito do destinatário.
            Recebimento de dinheiro Os usuários podem receber dinheiro através
            do aplicativo. O recebimento de dinheiro está sujeito a taxas, que
            serão informadas ao usuário antes do recebimento. Os usuários devem
            fornecer informações precisas sobre sua conta bancária ou cartão de
            crédito/débito para receber dinheiro. Taxas O uso do nosso serviço
            está sujeito a taxas, que serão informadas ao usuário antes do envio
            ou recebimento de dinheiro. As taxas podem variar de acordo com o
            valor enviado ou recebido, a forma de pagamento escolhida e outros
            fatores. Os usuários concordam em pagar todas as taxas associadas ao
            uso do nosso serviço. Segurança Nosso aplicativo de transferência de
            dinheiro utiliza medidas de segurança para proteger as informações
            dos usuários, incluindo criptografia de dados. No entanto, os
            usuários reconhecem que a segurança da Internet não é perfeita e que
            não podemos garantir a segurança de todas as transações. Os usuários
            são responsáveis por manter a segurança de suas informações de
            conta. Limitação de responsabilidade Em caso algum seremos
            responsáveis por quaisquer danos diretos, indiretos, incidentais,
            especiais ou consequenciais decorrentes do uso do nosso serviço,
            incluindo perda de lucros, perda de dados ou interrupção do serviço.
            Os usuários utilizam o nosso serviço por sua própria conta e risco.
            Alterações nos Termos e Condições.
          </Text>
        </ScrollView>
        {end ? (
          <TouchableOpacity style={Styles.button} onPress={()=>router.push("/Password")} >
            <Text style={Styles.buttonText1}>Continuar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Text style={Styles.buttonText}>
                Deslize para baixo para aceitar
              </Text>
              <Entypo name="chevron-thin-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  button: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Light",
    marginBottom: 5,
  },
  buttonSecondaryText: {
    fontSize: 17,
    fontFamily: "Light",
    color: "#ccc",
  },
  img: {
    width: 70,
    height: 70,
    marginBottom: 40,
  },
  simArea: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  text1: {
    fontSize: 18,
    fontFamily: "Light",
    textAlign: "center",
    marginBottom: 40,
  },
  text2: {
    fontSize: 16,
    fontFamily: "Light",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#ee3124",
    borderRadius: 7,
  },
  buttonText1: {
    color: "#fff",
    fontFamily: "Light",
    fontSize: 17,
  },
});
export default Conditions;
