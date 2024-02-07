// Discover.tsx
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../../constants/Colors";
import ImageCard from "../../../components/Discover/ImageCard/ImageCard";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

interface DiscoverProps {
  userProfiles: Array<{
    name: string;
    activity: string;
    profession: string;
    img: any;
  }>;
}

const Discover: React.FC<DiscoverProps> = ({ userProfiles }) => {
  const translateX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacityValue = useSharedValue(1);

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
        // Remove the swiped element from the array
        runOnJS(setCurrentIndex)(currentIndex + 1);
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
      opacity: opacityValue.value,
    };
  });

  const visibleProfiles = userProfiles.slice(currentIndex).reverse();

  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
      {/* Card Container */}
      {currentIndex < visibleProfiles.length ? (
        visibleProfiles.map((userProfile, index) => (
          <View
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              marginTop: 50,
            }}
          >
            <PanGestureHandler
              onGestureEvent={
                index === visibleProfiles.length - 1
                  ? gestureHandler
                  : undefined
              }
            >
              <Animated.View
                style={[
                  {
                    backgroundColor: Colors.subtlePink,
                    height: "95%",
                    width: "100%",
                    zIndex: index,
                    bottom: index * 25,
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
                  index === visibleProfiles.length - 1 && animatedStyle,
                ]}
              >
                <ImageCard userProfile={[userProfile]} />
              </Animated.View>
            </PanGestureHandler>
          </View>
        ))
      ) : (
        <Text>Hola Hola</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Discover;
