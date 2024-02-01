import { Tabs } from "expo-router";
import SplashPage from "../modules/SplashPage/SplashPage";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="matches" options={{ headerShown: false }} />
      <Tabs.Screen name="messages" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
    // <SplashPage />
  );
}
