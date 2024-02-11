import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface BubbleChatProps {
  txtMessage: string;
  isRightSide: boolean;
}

const BubbleChat = ({ txtMessage, isRightSide }: BubbleChatProps) => {
  const messageStyle = isRightSide ? styles.rightMessage : styles.leftMessage;

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {isRightSide && (
        <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Ionicons name="checkmark-done" size={18} color={Colors.darkGrey} />
          <Text style={{ color: Colors.darkGrey, fontSize: 10 }}>7:00 PM</Text>
        </View>
      )}
      <View style={messageStyle}>
        <Text style={{ color: isRightSide ? Colors.white : Colors.darkBlack }}>
          {txtMessage}
        </Text>
      </View>
      {!isRightSide && (
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={{ color: Colors.darkGrey, fontSize: 10 }}>7:00 PM</Text>
        </View>
      )}
    </View>
  );
};

export default BubbleChat;

const styles = StyleSheet.create({
  leftMessage: {
    // Styling for left-aligned messages
    flex: 1,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
    backgroundColor: Colors.subtlePink,
  },
  rightMessage: {
    // Styling for right-aligned messages (e.g., different color)
    flex: 1,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
    backgroundColor: Colors.darkPink,
  },
});
