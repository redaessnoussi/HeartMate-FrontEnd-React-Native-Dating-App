import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
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
      regular: { fontFamily: "PoppinsRegular" },
      medium: { fontFamily: "PoppinsMedium" },
      bold: { fontFamily: "PoppinsBold" },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status
  const splashPage = "/modules/SplashPage/SplashPage";

  // Show The Splash Page if the user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push(splashPage);
    } else {
      router.back();
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <Stack />
      )}
    </>
  );
}
