import { StyleSheet, View, Text  } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons'
import { set } from "react-native-reanimated"
function Keyboard({entry, setEntry}) {
  return (
    <View style={style.Keyboard}>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >3</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >6</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setEntry(entry+"*")} style={style.btn}>
                <Text style={style.txt} >9</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity style={{...style.btn, justifyContent: "center", alignItems: "center"}} onPress={()=> entry.length !==0 ? setEntry(entry.slice(0, entry.length-1)) : null} >
            <Ionicons name="backspace" size={30} color="#2b2b2b" />
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={()=> setEntry(entry+"*")} >
                <Text style={style.txt} >0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn}>
                <Text style={style.txt} ></Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
            <Text style={style.txt2}>
                Esqueceste o teu PIN?
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const style= StyleSheet.create({
    Keyboard: {
        width: "100%",
        height: "41%",
        padding: 15,
        justifyContent: "space-between",
    },
    txt:{
        fontSize: 30,
        fontFamily: "Light",
        textAlign: "center",
    },
    btn:{
        width: 100,
    },
    txt2:{
        fontSize: 15,
        fontFamily: "Light",
        textAlign: "center",
        paddingVertical: 15
    }
})
export default Keyboard