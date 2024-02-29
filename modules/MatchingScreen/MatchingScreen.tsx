import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { useNavigation } from "expo-router";
import CustomButton from "../../../components/Customs/CustomButton/CustomButton";

const HeaderTop = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* top header back button */}
      <View style={{ flexDirection: "row" }}>
        <CustomButton
          iconName="chevron-back"
          iconType="Ionicons"
          iconColor={Colors.darkPink}
          btnColor="transparent"
          btnSize="sm"
          iconSize={32}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const MatchingScreen = () => {
  // console.log("Heading1", Heading1);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/images/love-element.jpg")}
        style={{
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        // resizeMode="cover"
      >
        <View
          style={{
            paddingTop: 64,
            paddingHorizontal: 32,
            paddingBottom: 32,
            backgroundColor: "#ff000010",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <HeaderTop />
          {/* congrats headline section */}
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "900",
                color: Colors.darkPink,
                fontSize: 36,
              }}
            >
              Congratulation!
            </Text>
            <Text style={{ fontWeight: "900", fontSize: 18 }}>
              You and <Text style={{ color: Colors.darkPink }}>Mike</Text> liked
              each other!
            </Text>
          </View>

          {/* profile partner image and user image */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/* user account image view rounded */}
            <View
              style={{
                width: 190,
                height: 190,
                borderColor: Colors.darkPink,
                borderWidth: 8,
                borderRadius: 95,
                marginRight: -24,
                backgroundColor: Colors.darkPink,
              }}
            >
              <Image
                source={require("../../../assets/images/man-face-3.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 95 }} // 95 is half of 190
              />
            </View>
            {/* partner image view rounded */}
            <View
              style={{
                width: 190,
                height: 190,
                borderColor: Colors.darkPink,
                borderWidth: 8,
                borderRadius: 95,
                marginLeft: -24,
                backgroundColor: "red",
              }}
            >
              <Image
                source={require("../../../assets/images/woman-face-2.jpg")}
                style={{ width: "100%", height: "100%", borderRadius: 95 }} // 95 is half of 190
              />
            </View>
          </View>

          {/* content & button section */}
          <View>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              Break the ice with a fun question or a simple 'Hi!' and let the
              conversation begin!
            </Text>
            {/* chat and swipe calls to action buttons */}
            <View
              style={{
                // flexDirection: "row",
                justifyContent: "center",
                marginTop: 32,
                gap: 16,
              }}
            >
              <CustomButton
                btnColor={"primary"}
                btnSize="lg"
                text="Say Hi!"
                onPress={() => console.log("go chat page")} // navigate to chat screen on button press
              />
              <CustomButton
                btnColor={"secondary"}
                btnSize="lg"
                text="Keep Swipping"
                onPress={() => console.log("discover matches")} // navigate to discover matches screen on button press
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MatchingScreen;

const styles = StyleSheet.create({});
