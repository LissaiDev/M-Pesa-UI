import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SlashCreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Light: require("../assets/fonts/EagleLight.otf"),
    Book: require("../assets/fonts/EagleBook.otf"),
    Bold: require("../assets/fonts/EagleBold.otf"),
    Black: require("../assets/fonts/EagleBlack.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }} onLayout={onLayoutRootView} />
  );
};
export default Layout;
