import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
// import SplashCover from "../../assets/images/happy-couple-splash-screen.jpg"

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      {/* Start: Top Image */}
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Image
          source={require("../../assets/images/happy-couple-splash-screen.jpg")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      {/* End: Top Image */}

      {/* Start: Bottom Section */}
      <View
        style={{
          padding: 32,
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "blue",
        }}
      >
        {/* Start: Header & Text */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 36 }}>Connect with Heartfelt Vibes</Text>
          <Text>
            Dive into a world of meaningful connections and vibrant social
            interactions. Your journey to genuine connections starts here!
          </Text>
        </View>
        {/* End: Header & Text */}

        {/* Start: Swipe Button */}
        <View>
          <Text>Get Started</Text>
        </View>
        {/* End: Swipe Button */}
      </View>
      {/* End: Bottom Section */}
    </View>
  );
}

const styles = StyleSheet.create({});
