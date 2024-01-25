import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, useColorScheme } from "react-native";
import SplashPage from "./modules/SplashPage/SplashPage";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Theme with the loaded fonts
  const theme = {
    ...DefaultTheme, // You can also use DarkTheme or create your custom theme
    fonts: {
      regular: { fontFamily: "PoppinsRegular", fontWeight: "normal" },
      bold: { fontFamily: "PoppinsBold", fontWeight: "bold" },
      semiBold: { fontFamily: "PoppinsSemiBold", fontWeight: "500" },
    },
  };

  return (
    <ThemeProvider value={theme}>
      {loggedIn ? <RootLayoutNav /> : <SplashPage />}
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
}
