import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import { useEffect, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Discover from "../modules/Discover/discover";
import userCards from "../../components/Discover/UserCards/userCards";
import CustomButton from "../../components/CustomButton/CustomButton";
import PostDiscoverSwitch from "../../components/UserPosts/PostDiscoverSwitch";

export default function TabOneScreen() {
  const [imageHeights, setImageHeights] = useState<number[]>([]);
  const [discover, setdiscover] = useState(false);

  // Callback function to update discover state
  const handleDiscoverChange = (newValue: boolean) => {
    setdiscover(newValue);
  };

  const generateSize = () => {
    const sizes = userProfiles.map(() => {
      return Math.floor(Math.random() * (350 - 300)) + 250;
    });
    setImageHeights(sizes);
  };

  const userProfiles: Array<{
    id: number;
    name: string;
    activity: string;
    profession: string;
    img: any;
  }> = [
    {
      id: 1,
      name: "Michael Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
      img: require("../../assets/images/smiling-3.jpg"),
    },
    {
      id: 2,
      name: "Amanda Smith",
      activity: "Adventurous spirit seeking a partner to explore the world.",
      profession: "Doctor",
      img: require("../../assets/images/smiling-2.jpg"),
    },
    {
      id: 3,
      name: "Jannette Louis",
      activity: "I’ll cook a delicious food for you!",
      profession: "Photographer",
      img: require("../../assets/images/smiling-1.jpg"),
    },
    {
      id: 4,
      name: "Sophia Turner",
      activity:
        "Art enthusiast and movie lover. Looking for someone to share my passions with.",
      profession: "Teacher",
      img: require("../../assets/images/smiling-4.jpg"),
    },
    {
      id: 5,
      name: "David Foster",
      activity:
        "Tech geek and aspiring chef. Let me code you a website and cook you a meal!",
      profession: "Nurse",
      img: require("../../assets/images/smiling-1.jpg"),
    },
    {
      id: 6,
      name: "Michael Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
      img: require("../../assets/images/smiling-3.jpg"),
    },
  ];

  useEffect(() => {
    generateSize();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.mainContainer}>
        {/* Top Header Section */}
        <View style={styles.headerContainer}>
          {/* Location Settings Change */}
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Your Location</Text>
            <TouchableOpacity>
              <View style={styles.locationWrapper}>
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
          <View style={styles.notificationContainer}>
            {/* Search for user activity */}
            <CustomButton
              btnSize="sm"
              iconType="Ionicons"
              iconName="search-outline"
              iconSize={24}
              onPress={() => console.log("search")}
            />
            {/* Notification Bell */}
            <CustomButton
              btnSize="sm"
              iconType="Ionicons"
              iconName="notifications-outline"
              iconSize={24}
              onPress={() => console.log("show notification")}
            />
          </View>
        </View>

        {/* Switch Section */}
        <PostDiscoverSwitch
          onDiscoverChange={handleDiscoverChange}
          discover={discover}
        />

        {!discover ? (
          <>
            {/* Posts Items Section */}
            <View style={styles.postsContainer}>
              {/* Masonry List for Profile Cards */}
              <MasonryList
                style={styles.profileCardList}
                numColumns={2}
                data={userProfiles}
                renderItem={(item) => userCards(item, imageHeights)}
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
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    backgroundColor: Colors.white,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    gap: 4,
  },
  locationText: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
  locationWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  notificationContainer: {
    flexDirection: "row",
    gap: 16,
  },
  postsContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  profileCardList: {
    gap: 16,
  },
});
