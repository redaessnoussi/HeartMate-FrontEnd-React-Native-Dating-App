import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const LikeDislike = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        bottom: -54,
      }}
    >
      {/* Doesn't Like */}
      <TouchableOpacity
        style={[
          styles.btnShadow,
          {
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: Colors.white,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <AntDesign name="close" size={24} color={Colors.red} />
      </TouchableOpacity>
      {/* Favorite */}
      <TouchableOpacity
        style={[
          styles.btnShadow,
          {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: Colors.pink,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <AntDesign name="star" size={24} color={Colors.white} />
      </TouchableOpacity>
      {/* Like */}
      <TouchableOpacity
        style={[
          styles.btnShadow,
          {
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: Colors.white,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <AntDesign name="heart" size={24} color={Colors.red} />
      </TouchableOpacity>
    </View>
  );
};

export default LikeDislike;

const styles = StyleSheet.create({
  btnShadow: {
    shadowColor: "#313131",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
