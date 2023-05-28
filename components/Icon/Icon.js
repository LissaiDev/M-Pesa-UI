import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
function Icon({icon, text}) {
  return (
    <TouchableOpacity style={{backgroundColor:"white",paddingHorizontal:15,paddingVertical:20, width: 100, borderRadius: 10, alignItems: "center",}}>
        {icon}
        <Text style={{fontSize:14, fontFamily: "Light", textAlign: "center"}}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Icon;
