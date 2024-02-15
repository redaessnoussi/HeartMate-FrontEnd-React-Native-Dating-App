import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";
import * as IconTypes from "@expo/vector-icons"; // Assuming you have different icon libraries
import Colors from "../../../constants/Colors";

const btnSmall: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: 30,
};

const btnMedium: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 8,
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: 30,
};

const btnLarge: ViewStyle = {
  paddingHorizontal: 24,
  paddingVertical: 16,
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: 30,
};

const btnInactive: ViewStyle = {
  backgroundColor: Colors.softGrey,
};

const btnPrimary: ViewStyle = {
  backgroundColor: Colors.darkPink,
};

const btnSecondary: ViewStyle = {
  backgroundColor: Colors.white,
};

const txtPrimary = {
  color: Colors.white,
};

const txtSecondary = {
  color: Colors.darkPink,
};

const txtInactive = {
  color: Colors.darkBlack,
};

const txtMedium = {
  fontFamily: "PoppinsMedium",
};

const txtBold = {
  fontFamily: "PoppinsBold",
};

interface ButtonProps {
  btnSize?: "sm" | "md" | "lg";
  btnColor?: "primary" | "secondary" | "inactive";
  iconName?: string; // Name of the icon (optional)
  iconType?: keyof typeof IconTypes; // Type of icon library
  iconSize?: number; // Size of the icon in pixels (optional)
  iconColor?: string; // Color of the icon (optional)
  text?: string; // Optional text label for the button
  textStyle?: ViewStyle; // Styles for the text label (optional)
  fontWeight?: "medium" | "bold";
  containerStyle?: ViewStyle; // Styles for the button container (optional)
  onPress: () => void; // Function to be called on button press
}

const CustomButton = ({
  btnSize,
  btnColor,
  iconName,
  iconType,
  iconSize,
  iconColor,
  text,
  textStyle,
  fontWeight,
  containerStyle,
  onPress,
}: ButtonProps) => {
  // Get the appropriate icon component based on iconType
  const IconComponent = iconType ? IconTypes[iconType] : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        containerStyle,
        btnSize === "sm" ? btnSmall : [btnSize === "md" ? btnMedium : btnLarge],
        btnColor !== "inactive"
          ? [btnColor === "primary" ? btnPrimary : btnSecondary]
          : btnInactive,
      ]}
    >
      {iconName && (
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      )}
      {text && (
        <Text
          style={[
            textStyle,
            btnColor !== "inactive"
              ? [btnColor === "primary" ? txtPrimary : txtSecondary]
              : txtInactive,
            fontWeight === "medium" ? txtMedium : txtBold,
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Default styles for your button (customize as needed)
  defaultButton: {
    backgroundColor: "transparent", // Add background color or other styles
    padding: 8,
    borderRadius: 4,
  },
  defaultIcon: {
    marginRight: 8, // Adjust spacing as needed
  },
  defaultText: {
    fontSize: 16, // Adjust font size as needed
  },
});

export default CustomButton;
