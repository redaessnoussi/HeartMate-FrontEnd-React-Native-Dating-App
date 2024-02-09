import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { AntDesign, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import MessageOverview from "../../components/Message/MessageOverview/MessageOverview";

const messagesTab = () => {
  const [search, setSearch] = useState("");
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      imgProfile: require("../../assets/images/man-face-1.jpg"),
      message: {
        text: "Hello, how are you?",
        timestamp: "12:30 PM",
        unreadCount: 3,
        msgRead: true,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      imgProfile: require("../../assets/images/woman-face-1.jpg"),
      message: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timestamp: "1:45 PM",
        unreadCount: 0,
        msgRead: false,
      },
      story: {
        hasStory: false,
        type: "image",
        uri: null,
      },
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      imgProfile: require("../../assets/images/man-face-2.jpg"),
      message: {
        text: "Hey there!",
        timestamp: "2:15 PM",
        unreadCount: 1,
        msgRead: false,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      imgProfile: require("../../assets/images/woman-face-2.jpg"),
      message: {
        text: "Good morning!",
        timestamp: "8:00 AM",
        unreadCount: 0,
        msgRead: true,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
    {
      firstName: "Michael",
      lastName: "Williams",
      imgProfile: require("../../assets/images/man-face-3.jpg"),
      message: {
        text: "How's your day going?",
        timestamp: "10:20 AM",
        unreadCount: 2,
        msgRead: false,
      },
      story: {
        hasStory: false,
        type: "image",
        uri: null,
      },
    },
    {
      firstName: "Emma",
      lastName: "Brown",
      imgProfile: require("../../assets/images/man-face-1.jpg"),
      message: {
        text: "See you later!",
        timestamp: "5:30 PM",
        unreadCount: 0,
        msgRead: true,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
    {
      firstName: "William",
      lastName: "Wilson",
      imgProfile: require("../../assets/images/woman-face-1.jpg"),
      message: {
        text: "I have a question.",
        timestamp: "9:10 AM",
        unreadCount: 1,
        msgRead: false,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
    {
      firstName: "Olivia",
      lastName: "Anderson",
      imgProfile: require("../../assets/images/man-face-2.jpg"),
      message: {
        text: "What's up?",
        timestamp: "3:40 PM",
        unreadCount: 0,
        msgRead: true,
      },
      story: {
        hasStory: false,
        type: "image",
        uri: null,
      },
    },
    {
      firstName: "James",
      lastName: "Martinez",
      imgProfile: require("../../assets/images/woman-face-2.jpg"),
      message: {
        text: "Can you help me with this?",
        timestamp: "11:55 AM",
        unreadCount: 0,
        msgRead: true,
      },
      story: {
        hasStory: false,
        type: "image",
        uri: null,
      },
    },
    {
      firstName: "Sophia",
      lastName: "Taylor",
      imgProfile: require("../../assets/images/man-face-3.jpg"),
      message: {
        text: "Thanks!",
        timestamp: "6:20 PM",
        unreadCount: 0,
        msgRead: true,
      },
      story: {
        hasStory: true,
        type: "image",
        uri: require("../../assets/images/story.jpg"),
      },
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.white }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          paddingVertical: 64,
        }}
      >
        {/* Top Header Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="left" size={24} color={Colors.darkPink} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontFamily: "RobotoBold" }}>
            Message
          </Text>
          <TouchableOpacity>
            <SimpleLineIcons
              name="options-vertical"
              size={24}
              color={Colors.darkPink}
            />
          </TouchableOpacity>
        </View>
        {/* Search User's Section */}
        <View style={{ marginBottom: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.softGrey,
              borderRadius: 16,
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                padding: 0,
                margin: 0,
              }}
              placeholder="Search"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />

            <TouchableOpacity>
              <FontAwesome5
                name={"search"}
                size={24}
                color={Colors.darkBlack}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Recent Matches Section */}
        <View
          style={{
            backgroundColor: "#fff",
            marginRight: -24,
            marginBottom: 16,
          }}
        >
          <Text
            style={{ fontSize: 16, fontFamily: "RobotoBold", marginBottom: 16 }}
          >
            Recent Matches
          </Text>
          {/* Story List Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              {/* Users Story Section */}
              {users.map((user, key) => (
                <View
                  style={{
                    alignItems: "center",
                    gap: 8,
                  }}
                  key={key}
                >
                  {key === 0 ? (
                    <>
                      <TouchableOpacity
                        style={{
                          height: 56,
                          width: 56,
                          borderRadius: 28,
                          backgroundColor: Colors.darkPink,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.white,
                            fontFamily: "RobotoBold",
                            fontSize: 18,
                          }}
                        >
                          10+
                        </Text>
                      </TouchableOpacity>
                      <Text>Likes</Text>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* User Image Profile */}
                        <Image
                          source={user.imgProfile}
                          style={{
                            height: 56,
                            width: 56,
                            borderRadius: 28,
                            borderColor: user.story.hasStory
                              ? Colors.red
                              : Colors.white,
                            borderWidth: user.story.hasStory ? 3 : 0,
                          }}
                        />
                      </TouchableOpacity>
                      <Text>{user.firstName}</Text>
                    </>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Chat Menu Section */}
        <View
          style={{
            backgroundColor: Colors.subtlePink,
            padding: 8,
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderRadius: 40,
            marginBottom: 24,
          }}
        >
          {/* Chat Button */}
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: Colors.darkPink,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "RobotoBold",
                color: Colors.white,
              }}
            >
              Chat
            </Text>
            {/* Chat Stats Section */}
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: Colors.white,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "RobotoBold",
                  color: Colors.darkPink,
                }}
              >
                2
              </Text>
            </View>
          </TouchableOpacity>
          {/* Call Button */}
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: Colors.darkPink,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "RobotoBold",
                color: Colors.white,
              }}
            >
              Call
            </Text>
            {/* Chat Stats Section */}
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: Colors.white,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "RobotoBold",
                  color: Colors.darkPink,
                }}
              >
                5
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Chat List Section */}
        <View style={{ backgroundColor: Colors.white, gap: 16 }}>
          {users.map((user, key) => (
            <MessageOverview key={key} userData={user} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default messagesTab;

const styles = StyleSheet.create({
  // profileImage: {
  //   width: 56,
  //   height: 56,
  //   borderRadius: 28,
  //   marginRight: 8,
  // },
});
