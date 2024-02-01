import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import RegisterForm from "./RegisterForm/RegisterForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          paddingVertical: 48,
          backgroundColor: Colors.white,
        }}
      >
        {/* Logo & Headline */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Logo Image */}

          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: 80, height: 80 }}
          />
          {/* Logo Header */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: Colors.darkPink,
                fontFamily: "RobotoBold",
                fontSize: 24,
              }}
            >
              Heart
            </Text>
            <Text
              style={{
                color: Colors.pink,
                fontFamily: "RobotoBold",
                fontSize: 24,
              }}
            >
              Mate
            </Text>
          </View>
          <Text
            style={{
              color: Colors.darkBlack,
              fontFamily: "RobotoRegular",
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            Forge Bonds, Find Bliss.
          </Text>
        </View>

        {/* Login & Register Buttons */}
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.darkPink,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}
            >
              <Text style={{ color: Colors.white, fontFamily: "RobotoBold" }}>
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
              <Text style={{ fontFamily: "RobotoBold" }}>Register</Text>
            </TouchableOpacity>
          </View>
          {/* Horizontal Barrier */}
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.softGrey,
              marginVertical: 20,
            }}
          />
        </View>

        {/* Credentials Inputs */}
        <View style={{ flex: 2, gap: 16 }}>
          <Text style={{ color: Colors.darkBlack, fontFamily: "RobotoMedium" }}>
            Email
          </Text>
          <TextInput
            style={{
              backgroundColor: Colors.softGrey,
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderRadius: 8,
            }}
            placeholder="Enter your email"
            keyboardType="default"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={{ color: Colors.darkBlack, fontFamily: "RobotoMedium" }}>
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.softGrey,
              borderRadius: 8,
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                padding: 0,
                margin: 0,
              }}
              placeholder="Enter your Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity onPress={toggleShowPassword}>
              <FontAwesome5
                name={showPassword ? "eye-slash" : "eye"}
                size={20}
                color={Colors.darkBlack}
              />
            </TouchableOpacity>
          </View>

          {/* Forget Password */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
                fontFamily: "RobotoRegular",
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
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            <Text style={{ color: Colors.white, fontFamily: "RobotoBold" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* Registration Form */}
        <RegisterForm />

        {/* Social Media Login */}
        <View style={{ gap: 10 }}>
          <Text
            style={{
              color: Colors.darkBlack,
              fontFamily: "RobotoMedium",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              <FontAwesome5 name="google" size={24} color={Colors.darkPink} />
              <Text
                style={{ color: Colors.darkPink, fontFamily: "RobotoBold" }}
              >
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
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              <FontAwesome name="facebook" size={24} color={Colors.darkPink} />
              <Text
                style={{ color: Colors.darkPink, fontFamily: "RobotoBold" }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
