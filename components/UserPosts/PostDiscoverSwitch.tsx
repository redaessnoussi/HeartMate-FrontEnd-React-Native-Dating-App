import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButton from "../CustomButton/CustomButton";

interface PostDiscoverSwitchProps {
  onDiscoverChange: (newValue: boolean) => void;
  discover: boolean;
}

const PostDiscoverSwitch: React.FC<PostDiscoverSwitchProps> = ({
  onDiscoverChange,
  discover,
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.softGrey,
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
        paddingVertical: 8,
        borderRadius: 40,
        marginBottom: 16,
      }}
    >
      {/* Switch to Post Section */}
      <CustomButton
        text="Post"
        btnSize="md"
        fontWeight="bold"
        btnColor={discover ? "inactive" : "primary"}
        onPress={() => onDiscoverChange(false)}
      />
      {/* Switch to Discover Section */}
      <CustomButton
        text="Discover"
        btnSize="md"
        fontWeight="bold"
        btnColor={discover ? "primary" : "inactive"}
        onPress={() => onDiscoverChange(true)}
      />
    </View>
  );
};

export default PostDiscoverSwitch;

const styles = StyleSheet.create({});
