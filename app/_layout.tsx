import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, useColorScheme } from "react-native";
import SplashPage from "./modules/SplashPage/SplashPage";
import LoginPage from "./modules/LoginPage/LoginPage";

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
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
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
      regular: { fontFamily: "RobotoRegular" },
      bold: { fontFamily: "RobotoBold" },
      semiBold: { fontFamily: "RobotoMedium" },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
