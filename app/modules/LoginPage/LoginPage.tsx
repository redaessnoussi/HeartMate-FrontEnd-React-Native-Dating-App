import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 48,
      }}
    >
      {/* Logo & Headline */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Logo Image */}

        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        {/* Logo Header */}
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: Colors.darkPink,
              fontFamily: "PoppinsBold",
              fontSize: 24,
            }}
          >
            Heart
          </Text>
          <Text
            style={{
              color: Colors.pink,
              fontFamily: "PoppinsBold",
              fontSize: 24,
            }}
          >
            Mate
          </Text>
        </View>
        <Text
          style={{
            color: Colors.darkBlack,
            fontFamily: "PoppinsRegular",
            fontSize: 14,
          }}
        >
          Forge Bonds, Find Bliss.
        </Text>
      </View>

      {/* Login & Register Buttons */}
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.darkPink,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: Colors.white, fontFamily: "PoppinsBold" }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontFamily: "PoppinsBold" }}>Register</Text>
          </TouchableOpacity>
        </View>
        {/* Horizontal Barrier */}
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: Colors.softGrey,
            marginVertical: 20,
          }}
        />
      </View>

      {/* Credentials Inputs */}
      <View style={{ flex: 2, gap: 16 }}>
        <Text
          style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}
        >
          Email or Username
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.softGrey,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 8,
          }}
          placeholder="Enter your email or username"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text
          style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}
        >
          Password
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.softGrey,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 8,
          }}
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Forget Password */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text style={{ fontSize: 12 }}>Stay Logged In</Text>
          </View>
          <Text
            style={{
              color: Colors.red,
              fontFamily: "PoppinsRegular",
              fontSize: 12,
            }}
          >
            Forgot Password?
          </Text>
        </View>
        {/* Sign In Button */}
        <TouchableOpacity
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            backgroundColor: Colors.darkPink,
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: Colors.white, fontFamily: "PoppinsBold" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Login */}
      <View style={{ gap: 10 }}>
        <Text
          style={{
            color: Colors.darkBlack,
            fontFamily: "PoppinsSemiBold",
            textAlign: "center",
          }}
        >
          Or continue with
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.white,
              borderRadius: 30,
              gap: 16,
              paddingHorizontal: 24,
              paddingVertical: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
          >
            <FontAwesome5 name="google" size={24} color={Colors.darkPink} />
            <Text style={{ color: Colors.darkPink, fontFamily: "PoppinsBold" }}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.white,
              borderRadius: 30,
              gap: 16,
              paddingHorizontal: 24,
              paddingVertical: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
          >
            <FontAwesome name="facebook" size={24} color={Colors.darkPink} />
            <Text style={{ color: Colors.darkPink, fontFamily: "PoppinsBold" }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
