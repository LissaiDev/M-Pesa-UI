import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Switch,TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from "../../components/Icon/Icon";
import News from "../../components/News/News";
function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="#ee3124" />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#b91c15", "#ee3222"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.gradient}
        >
          <Text style={styles.txt}>Olá Desenvovedor!</Text>
          <Text style={styles.date}>Último acesso: 18 mai, 12:22</Text>
          <View style={styles.balance}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.see}>Ver saldo</Text>
                <Switch
                  value={enabled}
                  onValueChange={() => setEnabled(!enabled)}
                  trackColor={{ false: "#ee3124", true: "#830200" }}
                  thumbColor={"white"}
                />
              </View>
              {enabled ? (
                <Text style={styles.textBalance}>30546.54 MT</Text>
              ) : (
                <Text style={styles.textBalance}>*******</Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
              paddingHorizontal: 15,
              paddingVertical: 20,
              borderRadius: 7,
              position: "relative",
              top: 30
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="filetext1" size={20} color="black" />
              <Text
                style={{
                  ...styles.see,
                  fontSize: 21,
                  marginLeft: 20,
                  color: "black",
                }}
              >
                Mini-Extracto
              </Text>
            </View>
            <Entypo name="chevron-thin-right" size={24} color="red" />
          </TouchableOpacity>
        </LinearGradient>

        <View style={{paddingVertical: 10, marginTop: 38, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between"}}>
                <Icon icon={<AntDesign name="user" size={30} color="red" />} text="Transferir dinheiro"/>
                <Icon icon={<FontAwesome5 name="money-bill" size={30} color="red" />} text="Fazer levantamentos" />
                <Icon icon={<FontAwesome5 name="lightbulb" size={30} color="red" />} text="Pagar credelec" />
        </View>
        <Text style={{fontSize: 20, fontFamily: "Light", marginTop: 20, marginHorizontal:20}} >
            Descobrir
        </Text>
        <News />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
  gradient: {
    height: 250,
    padding: 20,
  },
  balance: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontFamily: "Light",
    textAlign: "center",
  },
  date: {
    color: "white",
    fontSize: 15,
    fontFamily: "Light",
    textAlign: "center",
  },
  see: {
    color: "white",
    fontSize: 18,
    fontFamily: "Light",
  },
  textBalance: {
    color: "white",
    fontSize: 20,
    fontFamily: "Book",
  },
});
export default App;
