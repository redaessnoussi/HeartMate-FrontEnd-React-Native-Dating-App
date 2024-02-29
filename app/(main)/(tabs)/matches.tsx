import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MatchingScreen from "../../modules/MatchingScreen/MatchingScreen";
import { Link } from "expo-router";

const matchesTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/modal">Present modal</Link>
    </View>
  );
};

export default matchesTab;

const styles = StyleSheet.create({});
