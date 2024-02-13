import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { Ionicons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import Discover from "../modules/Discover/discover";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const [imageHeights, setImageHeights] = useState<number[]>([]);
  const [discover, setdiscover] = useState(false);

  const generateSize = () => {
    const sizes = userProfiles.map(() => {
      return Math.floor(Math.random() * (300 - 200 + 1)) + 150;
    });
    setImageHeights(sizes);
  };

  const userProfiles: Array<{
    name: string;
    activity: string;
    profession: string;
    img: any;
  }> = [
    {
      name: "Michael Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
      img: require("../../assets/images/smiling-3.jpg"),
    },
    {
      name: "Amanda Smith",
      activity: "Adventurous spirit seeking a partner to explore the world.",
      profession: "Doctor",
      img: require("../../assets/images/smiling-2.jpg"),
    },
    {
      name: "Jannette Louis",
      activity: "I’ll cook a delicious food for you!",
      profession: "Photographer",
      img: require("../../assets/images/smiling-1.jpg"),
    },
    {
      name: "Sophia Turner",
      activity:
        "Art enthusiast and movie lover. Looking for someone to share my passions with.",
      profession: "Teacher",
      img: require("../../assets/images/smiling-4.jpg"),
    },
    {
      name: "David Foster",
      activity:
        "Tech geek and aspiring chef. Let me code you a website and cook you a meal!",
      profession: "Nurse",
      img: require("../../assets/images/smiling-1.jpg"),
    },
    {
      name: "Michael Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
      img: require("../../assets/images/smiling-3.jpg"),
    },
  ];

  const usersCards = (item: any) => {
    const userProfile = item.item;
    return (
      <>
        <ImageBackground
          source={userProfile.img}
          style={[styles.imageBackground, { height: imageHeights[item.i] }]}
          key={item.i}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.7)", "transparent"]}
            locations={[0.07, 0.2]}
            style={styles.gradient}
          >
            <View style={styles.cardContent}>
              <Text style={styles.title}>{userProfile.name}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View
          style={{
            paddingVertical: 8,
            backgroundColor: Colors.white,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: Colors.darkBlack,
              fontFamily: "RobotoRegular",
              width: "80%",
            }}
            numberOfLines={2}
          >
            {userProfile.activity}
          </Text>
          <Link href={`/modules/UserDetail/2`} asChild>
            <TouchableOpacity>
              <SimpleLineIcons name="options" size={24} color={Colors.grey} />
            </TouchableOpacity>
          </Link>
        </View>
      </>
    );
  };

  useEffect(() => {
    generateSize();
  }, []);

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
          backgroundColor: Colors.white,
        }}
      >
        {/* Top Header Section */}
        <View
          style={{
            backgroundColor: Colors.white,
            marginBottom: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* location */}
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 16, fontFamily: "RobotoMedium" }}>
              Your Location
            </Text>
            <TouchableOpacity>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Octicons name="location" size={16} color={Colors.red} />
                <Text>Surabaya, IDN</Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={16}
                  color={Colors.red}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Notification and Search */}
          <View style={{ flexDirection: "row", gap: 16 }}>
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Switch Section */}
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
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: Colors.darkPink,
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: Colors.white, fontFamily: "RobotoBold" }}>
              Post
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              backgroundColor: Colors.softGrey,
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: Colors.darkBlack, fontFamily: "RobotoBold" }}>
              Discover
            </Text>
          </TouchableOpacity>
        </View>
        {!discover ? (
          <>
            {/* Posts Items Section */}
            <View
              style={{
                backgroundColor: Colors.white,
                flex: 1,
              }}
            >
              {/* Masonry List for Profile Cards */}
              <MasonryList
                style={{ gap: 16 }}
                numColumns={2}
                data={userProfiles}
                renderItem={(item) => usersCards(item)}
              />
            </View>
          </>
        ) : (
          <>
            {/* Discover Items Section */}
            <Discover userProfiles={userProfiles} />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 10,
  },
  gradient: {
    flex: 1,
    padding: 16,
  },
  cardContent: {
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  description: {
    fontSize: 16,
    color: "#FFF",
  },
});
