import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import Colors from "../../../constants/Colors";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import MatchPercent from "../../../components/Discover/MatchPercent/MatchPercent";

const UserDetail = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // Customize the top header using Expo Router's header configuration:
    const headerOptions = {
      headerShown: false,
    };

    // Ensure your navigation object is accessible:
    if (navigation) {
      navigation.setOptions(headerOptions);
    }
  }, []);

  const data = [
    { img: "../../../assets/images/smiling-2.jpg" },
    { img: "../../../assets/images/smiling-2.jpg" },
    { img: "../../../assets/images/smiling-2.jpg" },
    { img: "../../../assets/images/smiling-2.jpg" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {/* Profile Picture */}
      <View style={{ flex: 1, backgroundColor: "red", marginBottom: -32 }}>
        {/* Top Section */}
        <ImageBackground
          source={require("../../../assets/images/smiling-2.jpg")}
          style={{
            paddingTop: 64,
            paddingHorizontal: 32,
            paddingBottom: 64,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          {/* Top Section With Back Button and Distance */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={32} color={Colors.white} />
            </TouchableOpacity>

            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                gap: 8,
                borderRadius: 32,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.glassGrey,
              }}
            >
              <Octicons name="location" size={16} color={Colors.white} />
              <Text style={{ color: Colors.white }}>4 miles away</Text>
            </View>
          </View>

          {/* Match Percentage Section */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                gap: 8,
                borderRadius: 40,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.glassGrey,
              }}
            >
              <MatchPercent />
              <Text style={{ color: Colors.white, fontSize: 20 }}>Match</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Profile Detail */}
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 32,
          paddingVertical: 24,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          backgroundColor: Colors.white,
        }}
      >
        {/* Name & Profession */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 24 }}>Mike Thompson, 25</Text>
            <Text style={{ fontSize: 16, color: Colors.darkGrey }}>
              Photogtapher
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.subtlePink,
            }}
          >
            <MaterialIcons name="chat" size={26} color={Colors.darkPink} />
          </TouchableOpacity>
        </View>

        {/* About Me Section */}
        <View style={{ gap: 8, marginBottom: 24 }}>
          <Text style={{ fontSize: 18 }}>About Me</Text>
          <Text>
            Adventurous with a passion for storytelling through the camera. A
            fitness enthusiast who loves the outdoors. Seeking meaningful
            relationships...
          </Text>
          <TouchableOpacity>
            <Text style={{ color: Colors.darkPink }}>Read more...</Text>
          </TouchableOpacity>
        </View>

        {/* Interest Section */}
        <View style={{ gap: 8, marginBottom: 24 }}>
          <Text style={{ fontSize: 18 }}>Interest</Text>
          {/* Hobbies & Interests */}
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 5,
                gap: 8,
                borderRadius: 32,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.subtlePink,
              }}
            >
              <Feather name="camera" size={16} color={Colors.darkPink} />
              <Text style={{ fontSize: 12 }}>Photography</Text>
            </View>

            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 5,
                gap: 8,
                borderRadius: 32,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.subtlePink,
              }}
            >
              <FontAwesome5
                name="campground"
                size={16}
                color={Colors.darkPink}
              />
              <Text style={{ fontSize: 12 }}>Outdoor</Text>
            </View>

            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 5,
                gap: 8,
                borderRadius: 32,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Colors.subtlePink,
              }}
            >
              <MaterialIcons
                name="card-travel"
                size={16}
                color={Colors.darkPink}
              />
              <Text style={{ fontSize: 12 }}>Travel</Text>
            </View>
          </View>
        </View>

        {/* Gallery Posts */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 18 }}>Gallery & Post</Text>
          <FlatList
            scrollEnabled={false}
            data={data}
            numColumns={2}
            columnWrapperStyle={{ gap: 16 }}
            contentContainerStyle={{ gap: 16, paddingVertical: 16 }}
            keyExtractor={(item, index) => item.img + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.darkGrey,
                  flex: 1,
                  height: 175,
                  borderRadius: 8,
                }}
              >
                <Image
                  source={require("../../../assets/images/smiling-2.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({});
