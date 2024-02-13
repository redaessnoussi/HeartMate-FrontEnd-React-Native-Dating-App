import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

type NameProfessionProps = {
  name: string;
  profession: string;
};

const NameProfession: React.FC<NameProfessionProps> = ({
  name,
  profession,
}) => {
  return (
    <>
      <View style={{ gap: 8 }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 20,
            fontFamily: "PoppinsBold",
          }}
        >
          {name}, 25
        </Text>
        <Text style={{ color: Colors.white }}>{profession}</Text>
      </View>
      {/* Vertical Options Button */}
      <TouchableOpacity>
        <SimpleLineIcons
          name="options-vertical"
          size={24}
          color={Colors.white}
        />
      </TouchableOpacity>
    </>
  );
};

export default NameProfession;

const styles = StyleSheet.create({});
