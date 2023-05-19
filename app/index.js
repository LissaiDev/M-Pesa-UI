import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , Image, TouchableOpacity} from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { useRef } from "react";
import { useRouter } from "expo-router";
import { Moz, Usa } from "../assets/images";
const App = () => {
  const animation = useRef(null);
  const handlePress=()=>{
    animation.current.play(0, 40);
  }
  const router = useRouter();
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.textBox}>
          <Text style={{...Styles.buttonText, color: "#000"}} >Por favor selecione o teu idioma</Text>
        </View>
        <View>
        <View>
            <View style={Styles.optionContainer}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image style={Styles.images} resizeMode="cover" source={Usa} />
              <Text style={{...Styles.buttonText, color: "#000"}}>
                English
              </Text>
            </View>
              <AnimatedLottieView style={Styles.animation} source={require("../assets/animations/radio-button.json")} />
            </View>
          </View>
          <View>
            <View style={{...Styles.optionContainer, borderTopWidth: 0}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image style={Styles.images} resizeMode="cover" source={Moz} />
              <Text style={{...Styles.buttonText, color: "#000"}}>
                Português
              </Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
            <AnimatedLottieView ref={animation} autoPlay={false} loop={false} style={Styles.animation} source={require("../assets/animations/radio-button.json")} />

            </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={Styles.button} onPress={()=> router.push("/Information")} >
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
    padding: 20,
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  images:{
    width:40,
    height: 40,
    borderRadius: 40,
    marginEnd: 30
  },
  optionContainer:{
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f0f0f0",
    paddingVertical: 13,
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    justifyContent: "space-between",
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#ee3124",
    position: "absolute",
    bottom: 10,
    left:20,
    borderRadius: 7
  },
  buttonText:{
    color: "#fff",
    fontFamily: "Light",
    fontSize: 17

  },
  animation:{
    width: 40
  }
});
export default App;
