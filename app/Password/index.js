import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Keyboard from "../../components/Keyboard/Keyboard";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useRouter } from "expo-router";
function App() {
  const router = useRouter();
  const [entry, setEntry] = useState("");
  const next = () => {
    setTimeout(() => {
      entry.length === 4 ? router.push("/Main") : null;
    },200)
  }
  next();
  return (
    <>
      <StatusBar
        backgroundColor="#ee3124"
        barStyle="dark-content"
        style="light"
      />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            ...styles.container,
            paddingHorizontal: 10,
            backgroundColor: "#ee3124",
            justifyContent: "center",
          }}
        >
          <View style={styles.code}>
            <Text style={styles.txt}>Por favor, digite seu PIN</Text>
            <Text
              style={{
                marginBottom: 10,
                paddingVertical: 20,
                fontSize: 20,
                textAlign: "center",
                borderColor: "#8f8f8f",
                borderWidth: 1,
                borderRadius: 7,
                color: "#8f8f8f",
                fontFamily: "Bold",
              }}
            >
              {entry}
            </Text>
            <Text style={{ ...styles.txt, color: "#8f8f8f" }}>
              Número de telefone: ******110
            </Text>
          </View>
        </View>
        <Keyboard entry={entry} setEntry={setEntry} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  code: {
    backgroundColor: "white",
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 10,
  },
  txt: {
    fontSize: 19,
    color: "#2b2b2b",
    fontFamily: "Light",
    textAlign: "center",
    marginVertical: 30,
  },
});

export default App;
