import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Colors from "../../../constants/Colors";

const MatchPercent = () => {
  return (
    <AnimatedCircularProgress
      size={56}
      width={6}
      fill={70}
      tintColor={Colors.darkPink}
      backgroundColor={Colors.white}
      rotation={360}
      duration={0}
      style={{
        backgroundColor: Colors.glassGrey,
        borderRadius: 28,
      }}
    >
      {(fill) => (
        <Text style={{ color: Colors.white, fontFamily: "PoppinsBold" }}>
          {fill}%
        </Text>
      )}
    </AnimatedCircularProgress>
  );
};

export default MatchPercent;

const styles = StyleSheet.create({});
