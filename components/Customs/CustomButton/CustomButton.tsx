import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
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

const btnTransparent: ViewStyle = {
  backgroundColor: "transparent",
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

const txtMedium: TextStyle = {
  fontWeight: "500",
};

const txtBold: TextStyle = {
  fontWeight: "900",
};

interface ButtonProps {
  btnSize?: "sm" | "md" | "lg" | undefined;
  btnColor?: "primary" | "secondary" | "inactive" | "transparent";
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

  const getButtonStyle = (btnColor: string, btnSize: string) => {
    let colorStyle, sizeStyle;

    switch (btnColor) {
      case "primary":
        colorStyle = btnPrimary;
        break;
      case "secondary":
        colorStyle = btnSecondary;
        break;
      case "inactive":
        colorStyle = btnInactive;
        break;
      case "transparent":
        colorStyle = btnTransparent;
        break;
      default:
        colorStyle = btnSecondary;
    }
    switch (btnSize) {
      case "sm":
        sizeStyle = btnSmall;
        break;
      case "md":
        sizeStyle = btnMedium;
        break;
      case "lg":
        sizeStyle = btnLarge;
        break;
      default:
        sizeStyle = btnMedium;
    }

    return [containerStyle, sizeStyle, colorStyle];
  };

  const getTextStyle = (btnColor: string, fontWeight: string) => {
    let colorStyle, weightStyle;

    switch (btnColor) {
      case "primary":
        colorStyle = txtPrimary;
        break;
      case "secondary":
        colorStyle = txtSecondary;
        break;
      case "inactive":
        colorStyle = txtInactive;
        break;
      default:
        colorStyle = txtSecondary;
    }

    switch (fontWeight) {
      case "medium":
        weightStyle = txtMedium;
        break;
      case "bold":
        weightStyle = txtBold;
        break;
      default:
        weightStyle = txtMedium;
    }

    return [textStyle, colorStyle, weightStyle];
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={getButtonStyle(btnColor || "", btnSize || "")}
    >
      {iconName && (
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      )}
      {text && (
        <Text style={getTextStyle(btnColor || "", fontWeight || "")}>
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
