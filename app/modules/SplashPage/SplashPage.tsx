import {
  Animated,
  Image,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";

const splashPage = () => {
  const swipeBtn = useRef(new Animated.ValueXY()).current;
  const [viewWidth, setviewWidth] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const router = useRouter();

  const imgAvatars: number[] = [
    require("../../../assets/images/man-face-1.jpg"),
    require("../../../assets/images/woman-face-1.jpg"),
    require("../../../assets/images/man-face-2.jpg"),
    require("../../../assets/images/woman-face-2.jpg"),
    require("../../../assets/images/man-face-3.jpg"),
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
    router.push("/modules/LoginPage/LoginPage");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.subtlePink }}>
      {/* Top Image */}
      <View style={{ flex: 1 }}>
        {/* <Image
          source={require("../../../assets/images/happy-couple-splash-screen.jpg")}
          style={{ height: "100%", width: "100%" }}
        /> */}
      </View>

      {/* Header & Description Section */}
      <View
        style={{
          paddingHorizontal: 32,
          paddingVertical: 48,
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: Colors.white,
        }}
      >
        {/* Header & Text */}
        <View>
          <Text style={styles.txtHeader}>Connect with Heartfelt Vibes</Text>
          <Text style={{ fontFamily: "PoppinsRegular" }}>
            Dive into a world of meaningful connections and vibrant social
            interactions. Your journey to genuine connections starts here!
          </Text>
        </View>

        {/* Users Stats */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {imgAvatars.map((img, key) => (
              <Image
                key={key}
                source={img}
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 24,
                  marginLeft: key === 0 ? 0 : -24,
                  borderWidth: 3,
                  borderColor: Colors.white,
                }}
              />
            ))}
          </View>
          <View>
            <Text style={styles.userStates}>10K+ Users</Text>
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

        {/* Swipe Button */}
        <View onLayout={onViewLayout} style={styles.sliderContainer}>
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
      </View>
    </SafeAreaView>
  );
};

export default splashPage;

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 36,
    lineHeight: 46,
    fontFamily: "PoppinsBold",
    color: Colors.darkBlack,
  },
  userStates: {
    fontSize: 18,
    fontFamily: "PoppinsBold",
    color: Colors.darkBlack,
    lineHeight: 20,
  },
  sliderContainer: {
    position: "relative",
    backgroundColor: Colors.glassGrey,
    padding: 8,
    height: 72,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  slideBtn: {
    backgroundColor: Colors.darkPink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
    top: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }], // Use transform property
  },
});
