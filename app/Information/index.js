import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import Page from "../../components/Page/Page";
import { Coins, Lock, House } from "../../assets/images/index.js";
import { useRouter } from "expo-router";
const App = () => {
  const router = useRouter();
  const information = [
    {
      image: Lock,
      title: "Seguro e protegido",
      description:
        "O M-pesa é um meio rápido, fácil e seguro de recepção e envio de dinheiro para amigos e familiares",
      key: 1,
    },
    {
      image: House,
      title: "Paga tuas contas em precisar sair de casa",
      description:
        "Paga as tuas contas com M-pesa de forma rápida, fácil e segura, e sem precisar ficar na fila.",
      key: 2,
    },
    {
      image: Coins,
      title: "Aceda ao teu dinheiro a qualquer hora",
      description:
        "Podes usar a App Meu M-Pesa sem estar conectado à internet. Permita que a App Meu M-Pesa envie SMS em teu nome. É grátis.",
      key: 3,
    },
  ];
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <PagerView initialPage={0} style={Styles.pagerView}>
          {information.map((item) => (
            <Page
              key={item.key}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </PagerView>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => router.push("/Information/Card")}
        >
          <Text style={Styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#ee3124",
    position: "absolute",
    bottom: 10,
    left: 20,
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Light",
    fontSize: 17,
  },
  pagerView: {
    flex: 1,
  },
});
export default App;
