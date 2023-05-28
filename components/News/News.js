import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

function News() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        marginTop:10
      }}
    >
      <Fontisto name="shopping-pos-machine" size={50} color="gray" />
      <View style={{marginHorizontal: 10}}>
        <Text style={{ fontSize: 16, fontFamily: "Book" }}>
          Levantar dinheiro
        </Text>
        <Text style={{ fontSize: 16, fontFamily: "Light" }}>
          Clique aqui para efectuar o pagamento usando POS de forma rápida
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default News;
