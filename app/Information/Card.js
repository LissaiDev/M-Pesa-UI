import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SIM } from "../../assets/images";
const Card = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.simArea}>
          <Image source={SIM} resizeMode="cover" style={Styles.img} />
          <Text style={Styles.text1}>Escolha o teu cartao SIM</Text>
          <Text style={Styles.text2}>
            Por favor escolha o cartão SIM da tua preferência para acessar com a
            tua conta M-Pesa
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ ...Styles.button, marginBottom: 10 }}
            onPress={() => router.push("/Conditions")}
          >
            <View>
              <Text style={Styles.buttonText}>SIM 1</Text>
              <Text style={Styles.buttonSecondaryText}>Vodacom</Text>
            </View>
            <Entypo name="chevron-thin-right" size={35} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...Styles.button, borderBottomWidth: 0 }}
            onPress={() => router.push("/Conditions")}
          >
            <View>
              <Text style={Styles.buttonText}>SIM 2</Text>
              <Text style={Styles.buttonSecondaryText}>Outra rede</Text>
            </View>
            <Entypo name="chevron-thin-right" size={35} color="red" />
          </TouchableOpacity>
        </View>
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
    paddingTop: 10
  },
  text1:{
    fontSize: 18,
    fontFamily: "Light",
    textAlign: "center",
    marginBottom: 40
  },
  text2: {
    fontSize: 16,
    fontFamily: "Light",
    textAlign: "center",
  }
});
export default Card;
