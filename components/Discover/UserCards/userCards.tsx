import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../constants/Colors";
import { Link } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";

const userCards = (item: any, imageHeights: any) => {
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
            fontFamily: "PoppinsRegular",
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

export default userCards;

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
});
