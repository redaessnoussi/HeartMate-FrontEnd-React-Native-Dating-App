import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
// import SplashCover from "../../assets/images/happy-couple-splash-screen.jpg"

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const swipeBtn = useRef(new Animated.ValueXY()).current;
  const [viewWidth, setviewWidth] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);

  const imageAvatars: number[] = [
    require("../../assets/images/man-face-1.jpg"),
    require("../../assets/images/woman-face-1.jpg"),
    require("../../assets/images/man-face-2.jpg"),
    require("../../assets/images/woman-face-2.jpg"),
  ];

  const onViewLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setviewWidth(width);
  };

  const swipeBtnHandler = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      const swipeWidth = Math.floor(viewWidth - 72); // Maximum allowed translation (adjust as needed)
      const newX = Math.max(0, Math.min(gesture.dx, swipeWidth));
      swipeBtn.setValue({ x: newX, y: 0 });
      if (newX === swipeWidth && !hasSwiped) {
        nextPage();
        setHasSwiped(true);
      }
    },
    onPanResponderRelease: (_, gesture) => {
      Animated.timing(swipeBtn, {
        toValue: { x: 0, y: 0 },
        duration: 0,
        useNativeDriver: false,
      }).start();
      setHasSwiped(false);
    },
  });

  const nextPage = () => {
    // Implement your logic when the button is swiped
    console.log("Next Page");
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Start: Top Image */}
      <View style={{ flex: 1, backgroundColor: Colors.subtlePink }}>
        <Image
          source={require("../../assets/images/happy-couple-splash-screen.jpg")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      {/* End: Top Image */}

      {/* Start: Bottom Section */}
      <View
        style={{
          padding: 32,
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: Colors.white,
          borderTopRightRadius: 80,
        }}
      >
        {/* Start: Header & Text */}
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 36,
              fontFamily: "PoppinsBold",
              color: Colors.darkBlack,
            }}
          >
            Connect with Heartfelt Vibes
          </Text>
          <Text style={{ fontFamily: "PoppinsRegular" }}>
            Dive into a world of meaningful connections and vibrant social
            interactions. Your journey to genuine connections starts here!
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {imageAvatars.map((img, key) => (
                <Image
                  key={key}
                  source={img}
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 24,
                    marginLeft: key === 0 ? 0 : -10,
                    borderWidth: 3,
                    borderColor: Colors.white,
                  }}
                />
              ))}
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "PoppinsBold",
                  color: Colors.darkBlack,
                }}
              >
                10K+ Users
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: Colors.red,
                  fontFamily: "PoppinsRegular",
                }}
              >
                have started their love adventure!
              </Text>
            </View>
          </View>
        </View>
        {/* End: Header & Text */}

        {/* Start: Swipe Button */}
        <View
          onLayout={onViewLayout}
          style={{
            position: "relative",
            backgroundColor: Colors.glassGrey,
            padding: 8,
            height: 72,
            borderRadius: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "auto" }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 20,
                fontFamily: "PoppinsBold",
              }}
            >
              Get Started
            </Text>
          </View>
          <TouchableOpacity style={{ left: 8, position: "absolute" }}>
            <Animated.View
              {...swipeBtnHandler.panHandlers}
              style={[swipeBtn.getLayout(), styles.slideBtn]}
            >
              <Feather name="arrow-right" size={40} color={Colors.white} />
            </Animated.View>
          </TouchableOpacity>
        </View>
        {/* End: Swipe Button */}
      </View>
      {/* End: Bottom Section */}
    </View>
  );
}

const styles = StyleSheet.create({
  slideBtn: {
    backgroundColor: Colors.darkPink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
    transform: [{ translateX: 0 }, { translateY: 0 }], // Use transform property
  },
});
