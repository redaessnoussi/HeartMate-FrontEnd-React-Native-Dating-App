import React, { useState } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";
import Colors from "constants/Colors";
import ImageCard from "components/Home/Discover/ImageCard/ImageCard";

interface DiscoverProps {
  userProfiles: Array<{
    id: number;
    name: string;
    activity: string;
    profession: string;
    img: any;
  }>;
}

const SWIPE_THRESHOLD = 120;

const Discover: React.FC<DiscoverProps> = ({ userProfiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardPosition = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      //   console.log(gesture.dx, gesture.dy);
      cardPosition.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        // Swipe right
        console.log("swipe right");
        swipeCard("right");
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        // Swipe left
        console.log("swipe left");
        swipeCard("left");
      } else {
        // Return to original position
        Animated.spring(cardPosition, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const cardRotate = cardPosition.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });

  const swipeCard = (direction: string) => {
    Animated.timing(cardPosition, {
      toValue: direction === "right" ? { x: 200, y: 0 } : { x: -200, y: 0 },
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      cardPosition.setValue({ x: 0, y: 0 });
    });
  };

  return (
    <View style={styles.container}>
      {userProfiles.slice(0, 3).map((item, index) => {
        if (index < currentIndex) return null;
        else if (index === currentIndex)
          return (
            <Animated.View
              key={item.id}
              style={[
                cardPosition.getLayout(),
                styles.card,
                { transform: [{ rotate: cardRotate }, { scale: 1 }] }, // Scale of 1 for the current card
              ]}
              {...panResponder.panHandlers}
            >
              <ImageCard userProfile={[item]} />
            </Animated.View>
          );
        else
          return (
            <Animated.View
              key={item.id}
              style={[
                styles.card,
                {
                  zIndex: -index,
                  transform: [
                    { translateY: -45 * (currentIndex - index) }, // Adjust position based on index
                    { scale: 0.95 + (currentIndex - index) * 0.1 },
                  ], // Adjust scale based on index
                },
              ]}
            >
              <ImageCard userProfile={[item]} />
            </Animated.View>
          );
      })}
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    height: "95%",
    width: "100%",
    position: "absolute",
    backgroundColor: Colors.subtlePink,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 82,
    borderRadius: 8,
    // shadowColor: "#313131",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});
