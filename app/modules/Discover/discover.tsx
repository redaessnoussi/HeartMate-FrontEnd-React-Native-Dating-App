// Discover.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";
import ImageCard from "../../../components/Discover/ImageCard/ImageCard";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface DiscoverProps {
  userProfiles: Array<{ name: string; activity: string; img: any }>;
}

const Discover: React.FC<DiscoverProps> = ({ userProfiles }) => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX > 150) {
        // Swipe right
        console.log("right");
      } else if (event.translationX < -150) {
        // Swipe left
        console.log("left");
      } else {
        // Reset to initial position
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
      {/* Card Container */}
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              backgroundColor: Colors.subtlePink,
              //   height: "95%",
              width: "100%",
              paddingHorizontal: 16,
              paddingTop: 16,
              paddingBottom: 64,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            },
            animatedStyle,
          ]}
        >
          <ImageCard userProfiles={userProfiles} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Discover;
