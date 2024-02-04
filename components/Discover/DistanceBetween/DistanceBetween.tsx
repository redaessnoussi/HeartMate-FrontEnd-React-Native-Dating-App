import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { Octicons } from "@expo/vector-icons";

const DistanceBetween = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.glassGrey,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 40,
        gap: 8,
      }}
    >
      <Octicons name="location" size={16} color={Colors.white} />
      <Text style={{ color: Colors.white }}>4 miles away</Text>
    </View>
  );
};

export default DistanceBetween;

const styles = StyleSheet.create({});
