import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const MessageTyping = () => {
  const [message, setMessage] = useState("");

  return (
    <View
      style={{
        height: 88,
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: Colors.white,
      }}
    >
      {/* Type Message Input   */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors.softGrey,
          borderRadius: 16,
          paddingHorizontal: 24,
          paddingVertical: 16,
          gap: 16,
        }}
      >
        <TouchableOpacity>
          <MaterialIcons
            name="add-circle-outline"
            size={26}
            color={Colors.darkPink}
          />
        </TouchableOpacity>

        <TextInput
          style={{
            flex: 1,
            padding: 0,
            margin: 0,
          }}
          placeholder="Type anything here.."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <TouchableOpacity>
          <Ionicons name="send" size={24} color={Colors.darkPink} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageTyping;

const styles = StyleSheet.create({});
