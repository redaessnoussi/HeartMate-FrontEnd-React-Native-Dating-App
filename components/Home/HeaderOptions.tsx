import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "constants/Colors";
import CustomButton from "components/Customs/CustomButton/CustomButton";

const HeaderOptions = () => {
  return (
    <>
      {/* Location Settings Change */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Your Location</Text>
        <TouchableOpacity>
          <View style={styles.locationWrapper}>
            <Octicons name="location" size={16} color={Colors.red} />
            <Text>Surabaya, IDN</Text>
            <Ionicons name="caret-down-sharp" size={16} color={Colors.red} />
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
    </>
  );
};

export default HeaderOptions;

const styles = StyleSheet.create({
  locationContainer: {
    gap: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
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
});
