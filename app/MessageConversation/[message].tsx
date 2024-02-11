import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import BubbleChat from "../../components/Message/BubbleChat/BubbleChat";
import MessageTyping from "../../components/Message/MessageTyping/MessageTyping";

const MessageConversation = () => {
  // const { message } = useLocalSearchParams();
  const navigation = useNavigation();

  const messages = [
    {
      id: "1",
      sender: "user",
      content:
        "Hi Mike! Your photography skills are amazing. How did you get into photography?",
      isRead: true,
      isSent: true,
      isReceived: false,
    },
    {
      id: "2",
      sender: "other",
      content:
        "Hey! Thanks a lot! I actually started as a hobbyist and fell in love with capturing moments. What about you? Any hobbies or passions?",
      isRead: false,
      isSent: false,
      isReceived: true,
    },
    {
      id: "3",
      sender: "user",
      content:
        "That's awesome! I'm into hiking and exploring new places. Ever combined photography with your travels?",
      isRead: true,
      isSent: true,
      isReceived: false,
    },
    {
      id: "4",
      sender: "other",
      content:
        "Absolutely! Travel photography is my jam. This is one of my favorite picture.",
      isRead: false,
      isSent: false,
      isReceived: true,
    },
    {
      id: "3",
      sender: "user",
      content:
        "That's awesome! I'm into hiking and exploring new places. Ever combined photography with your travels?",
      isRead: true,
      isSent: true,
      isReceived: false,
    },
    {
      id: "4",
      sender: "other",
      content:
        "Absolutely! Travel photography is my jam. This is one of my favorite picture.",
      isRead: false,
      isSent: false,
      isReceived: true,
    },
    {
      id: "3",
      sender: "user",
      content:
        "That's awesome! I'm into hiking and exploring new places. Ever combined photography with your travels?",
      isRead: true,
      isSent: true,
      isReceived: false,
    },
    {
      id: "4",
      sender: "other",
      content:
        "Absolutely! Travel photography is my jam. This is one of my favorite picture.",
      isRead: false,
      isSent: false,
      isReceived: true,
    },
    {
      id: "3",
      sender: "user",
      content:
        "That's awesome! I'm into hiking and exploring new places. Ever combined photography with your travels?",
      isRead: true,
      isSent: true,
      isReceived: false,
    },
    {
      id: "4",
      sender: "other",
      content:
        "Absolutely! Travel photography is my jam. This is one of my favorite picture.",
      isRead: false,
      isSent: false,
      isReceived: true,
    },
  ];

  useLayoutEffect(() => {
    // Customize the top header using Expo Router's header configuration:
    const headerOptions = {
      headerStyle: {
        backgroundColor: Colors.subtlePink, // Set background color to red
      },
      headerTitleAlign: "center",
      headerTitle: () => (
        // Function for customizable header title
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {/* Use Info with Image */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="chevron-back" size={32} color={Colors.darkPink} />
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://s3.envato.com/files/281015164/645Z3864%20copy.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={{ gap: 4 }}>
              <Text style={{ fontSize: 18, fontFamily: "RobotoBold" }}>
                Mike Thompson
              </Text>
              <Text style={{ color: Colors.red }}>Online</Text>
            </View>
            {/* Calls Buttons */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 24 }}
            >
              <TouchableOpacity>
                <FontAwesome5 name="video" size={24} color={Colors.darkPink} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5
                  name="phone-alt"
                  size={24}
                  color={Colors.darkPink}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
      headerBackVisible: false,
    };

    // Ensure your navigation object is accessible:
    if (navigation) {
      navigation.setOptions(headerOptions);
    }
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator
        style={{
          flex: 1,
          padding: 32,
          backgroundColor: Colors.white,
        }}
      >
        {/* Date Message Section */}
        <Text
          style={{
            color: Colors.darkGrey,
            fontFamily: "RobotoBold",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Today, 7:00 PM
        </Text>

        {/* Bubble Chat Section */}
        <View style={{ gap: 16, marginBottom: 44 }}>
          {/* Message Text Section (Fixed) */}
          {messages.map((message, index) => (
            <BubbleChat
              key={index}
              txtMessage={message.content}
              isRightSide={message.isSent ? true : false}
            />
          ))}
        </View>
      </ScrollView>
      <MessageTyping />
    </>
  );
};

export default MessageConversation;

const styles = StyleSheet.create({
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 28,
    marginRight: 8,
  },
});
