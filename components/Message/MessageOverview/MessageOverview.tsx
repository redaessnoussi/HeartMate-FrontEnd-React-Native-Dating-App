import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface User {
  firstName: string;
  lastName?: string; // Optional property
  imgProfile: number;
  message: {
    text: string;
    timestamp: string;
    unreadCount: number;
    msgRead: boolean;
  };
  story: {
    hasStory: boolean; // Indicates if the user has a story
    type: string; // Type of story content (if applicable)
    uri: number; // URI of the story image/video (required if user has a story)
  };
}

interface msgOverviewProps {
  userData: User;
}

const MessageOverview: React.FC<msgOverviewProps> = ({ userData }) => {
  const firstName = userData.firstName;
  const msgText = userData.message.text;
  const timestamp = userData.message.timestamp;
  const profileImage = userData.imgProfile;
  const unreadCount = userData.message.unreadCount;
  const msgRead = userData.message.msgRead;
  const hasStory = userData.story.hasStory;
  const type = userData.story.type;
  const uri = userData.story.uri;

  return (
    <TouchableOpacity style={styles.container}>
      {/* User Image Profile */}
      <Image
        source={profileImage}
        style={[
          styles.profileImage,
          {
            borderColor: hasStory ? Colors.red : Colors.white,
            borderWidth: hasStory ? 3 : 0,
          },
        ]}
      />
      {/* Message Content */}
      <View style={styles.messageContent}>
        <Text style={styles.username}>{firstName}</Text>
        <View style={styles.messageRow}>
          {/* show icon if message is unread */}
          {!msgRead && (
            <View style={styles.unreadIndicator}>
              <Ionicons
                name="checkmark-done"
                size={24}
                color={Colors.darkGrey}
              />
            </View>
          )}
          <Text>{msgText}</Text>
        </View>
      </View>

      <View style={styles.timestampContainer}>
        <Text style={styles.timestamp}>{timestamp}</Text>
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessageOverview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 8,
  },
  messageContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  messageRow: {
    flexDirection: "row",
  },
  unreadIndicator: {
    marginRight: 4,
  },
  timestampContainer: {
    alignItems: "flex-end",
    gap: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  badge: {
    backgroundColor: Colors.darkPink,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
