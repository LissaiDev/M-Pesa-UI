import {View, Text, Image, StyleSheet} from "react-native"

const Page = ({image, title, description})=>{
    return(
        <View style={styles.container}>
            <View>
                <Image source={image} style={styles.image} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.secondaryText}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        padding:15
    },
    image:{
        width: 120,
        height: 120,
        alignSelf: "center",
        marginBottom: 20
    },
    text:{
        fontFamily: "Light",
        fontSize: 17,
        textAlign: "center",
        marginBottom: 20
    },
    secondaryText:{
        fontFamily: "Light",
        fontSize: 13,
        textAlign: "center",
    }
})
export default Page;

