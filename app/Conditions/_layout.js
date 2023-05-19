import { Stack } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: "Termos & Condições",
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: "Light",
            fontSize: 20
        },
        headerLeft: () => (
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        ),
      }}
    />
  );
};
export default Layout;
