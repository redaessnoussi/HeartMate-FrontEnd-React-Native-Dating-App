import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";

const LogoHeadline = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Logo Image */}
      <Image
        source={require("../../../../assets/images/logo-2.png")}
        style={{ width: 100, height: 100 }}
      />
      {/* Logo Header */}
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: Colors.darkPink,
            fontFamily: "PoppinsBold",
            fontSize: 24,
          }}
        >
          Heart
        </Text>
        <Text
          style={{
            color: Colors.pink,
            fontFamily: "PoppinsBold",
            fontSize: 24,
          }}
        >
          Mate
        </Text>
      </View>
      <Text
        style={{
          color: Colors.darkBlack,
          fontFamily: "PoppinsRegular",
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        Forge Bonds, Find Bliss.
      </Text>
    </View>
  );
};

export default LogoHeadline;

const styles = StyleSheet.create({});
