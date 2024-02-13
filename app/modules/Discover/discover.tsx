import React, { useState } from "react";
import { StyleSheet, View, Text, Animated, PanResponder } from "react-native";
import Colors from "../../../constants/Colors";
import ImageCard from "../../../components/Discover/ImageCard/ImageCard";

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
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        // Swipe right
        swipeCard("right");
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        // Swipe left
        swipeCard("left");
      } else {
        // Return to original position
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const swipeCard = (direction: string) => {
    Animated.timing(position, {
      toValue: direction === "right" ? { x: 500, y: 0 } : { x: -500, y: 0 },
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      position.setValue({ x: 0, y: 0 });
    });
  };

  const renderCards = () => {
    return userProfiles.map((item, index) => {
      if (index < currentIndex) {
        return null;
      } else if (index === currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={[getCardStyle(), styles.card]}
            {...panResponder.panHandlers} // <-- Pass panResponder here
          >
            <ImageCard userProfile={[item]} />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[styles.card, { zIndex: -index }]} // <-- Update style here
          >
            <ImageCard userProfile={[item]} />
          </Animated.View>
        );
      }
    });
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  return <View style={styles.container}>{renderCards()}</View>;
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
    height: "100%",
    width: "100%",
    backgroundColor: Colors.subtlePink,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
    elevation: 10,
  },
});
