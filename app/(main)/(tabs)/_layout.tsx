import { Tabs } from "expo-router";
import { Animated, Text, TouchableOpacity } from "react-native";
// import SplashPage from "../modules/SplashPage/SplashPage";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { useEffect, useRef } from "react";

interface MenuItem {
  route: string;
  label: string;
  icon: (size: number, color: string) => React.ReactNode;
}

interface TabButtonProps {
  item: MenuItem;
  accessibilityState: { selected: boolean };
  onPress?: () => void; // Assuming onPress is optional
}

const MenuItems: MenuItem[] = [
  {
    route: "index",
    label: "Home",
    icon: (size, color) => <Octicons name="home" size={size} color={color} />,
  },
  {
    route: "matches",
    label: "Match",
    icon: (size, color) => (
      <FontAwesome5 name="heart" size={size} color={color} />
    ),
  },
  {
    route: "messages",
    label: "Message",
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="message-text-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    route: "profile",
    label: "Profile",
    icon: (size, color) => (
      <FontAwesome5 name="user" size={size} color={color} />
    ),
  },
];

export default function TabLayout() {
  const TabButton: React.FC<TabButtonProps> = (props) => {
    const { item, accessibilityState, onPress } = props;
    const focused = accessibilityState.selected;

    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(animationValue, {
        toValue: focused ? 1 : 0,
        duration: 50, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }, [focused]);

    const interpolatedValue = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1], // Adjust the output range for scaling effect
    });

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: focused ? 2 : 1,
        }}
      >
        {focused ? (
          <Animated.View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              backgroundColor: Colors.darkPink,
              paddingHorizontal: 16,
              paddingVertical: 8,
              gap: 8,
              borderRadius: 40,
              opacity: interpolatedValue,
              transform: [{ scale: interpolatedValue }],
            }}
          >
            {item.icon(24, Colors.white)}
            <Text style={{ color: Colors.white, fontWeight: "900" }}>
              {item.label}
            </Text>
          </Animated.View>
        ) : (
          <>{item.icon(28, Colors.grey)}</>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 88,
          paddingHorizontal: 32,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
        },
      }}
    >
      {MenuItems.map((item, key) => {
        return (
          <Tabs.Screen
            key={key}
            name={item.route}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarLabel: item.label,
              tabBarButton: (props: any) => (
                <TabButton {...props} item={item} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
