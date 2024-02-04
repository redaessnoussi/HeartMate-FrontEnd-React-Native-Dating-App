import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LikeDislike from "../LikeDislike/LikeDislike";
import NameProfession from "../NameProfession/NameProfession";
import MatchPercent from "../MatchPercent/MatchPercent";
import DistanceBetween from "../DistanceBetween/DistanceBetween";

interface DiscoverProps {
  userProfiles: Array<{ name: string; activity: string; img: any }>;
}

const ImageCard: React.FC<DiscoverProps> = ({ userProfiles }) => {
  return (
    <>
      {/* User Image Card */}
      <ImageBackground
        source={userProfiles[0].img}
        style={{ width: "100%", height: "100%" }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "transparent"]}
          locations={[0.07, 0.4]}
          start={{ x: 0.5, y: 1 }} // Bottom
          end={{ x: 0.5, y: 0 }} // Top
          style={styles.gradient}
        >
          {/* User Card Information Container */}
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            {/* Distance & Navigation */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              {/* Match Percentase  */}
              <MatchPercent />

              {/* Distance Between */}
              <DistanceBetween />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 48,
              }}
            >
              {/* Name & Profession */}
              <NameProfession />

              {/* Doesn't Like / Favorite / Like Buttons */}
              <LikeDislike />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 16,
  },
});
