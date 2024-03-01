import { StyleSheet, View, ScrollView } from "react-native";
import Colors from "constants/Colors";
import { useEffect, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import Discover from "screens/Home/Discover/Discover";
import userCards from "components/Home/Discover/UserCards/userCards";
import PostDiscoverSwitch from "components/Home/UserPosts/PostDiscoverSwitch";
import useRandomSizes from "components/Customs/Hooks/useRandomSizes";
import HeaderOptions from "components/Home/HeaderOptions";

const HomePage = () => {
  const [discover, setdiscover] = useState(false);

  // Callback function to update discover state
  const handleDiscoverChange = (newValue: boolean) => {
    setdiscover(newValue);
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
      img: require("assets/images/smiling-3.jpg"),
    },
    {
      id: 2,
      name: "Amanda Smith",
      activity: "Adventurous spirit seeking a partner to explore the world.",
      profession: "Doctor",
      img: require("assets/images/smiling-2.jpg"),
    },
    {
      id: 3,
      name: "Jannette Louis",
      activity: "I’ll cook a delicious food for you!",
      profession: "Photographer",
      img: require("assets/images/smiling-1.jpg"),
    },
    {
      id: 4,
      name: "Anna Turner",
      activity:
        "Art enthusiast and movie lover. Looking for someone to share my passions with.",
      profession: "Teacher",
      img: require("assets/images/smiling-4.jpg"),
    },
    {
      id: 5,
      name: "Alex Foster",
      activity:
        "Tech geek and aspiring chef. Let me code you a website and cook you a meal!",
      profession: "Nurse",
      img: require("assets/images/smiling-1.jpg"),
    },
    {
      id: 6,
      name: "Johny Rodriguez",
      activity:
        "Passionate about fitness and outdoor activities. Let’s stay active together!",
      profession: "Lawyer",
      img: require("assets/images/smiling-3.jpg"),
    },
  ];

  const imageHeights = useRandomSizes(userProfiles);

  useEffect(() => {
    imageHeights;
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
          <HeaderOptions />
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
};

export default HomePage;

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
  postsContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  profileCardList: {
    gap: 16,
  },
});
