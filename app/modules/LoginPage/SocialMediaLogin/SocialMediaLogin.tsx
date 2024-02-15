import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const SocialMediaLogin = () => {
  return (
    <View style={styles.socialLoginContainer}>
      <Text style={styles.socialLoginText}>Or continue with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={24} color={Colors.darkPink} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color={Colors.darkPink} />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaLogin;

const styles = StyleSheet.create({
  loginButton: {
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
  },
  loginButtonText: {
    color: Colors.white,
    fontFamily: "PoppinsBold",
  },
  registerButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  registerButtonText: {
    fontFamily: "PoppinsBold",
  },
  horizontalBar: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.softGrey,
    marginVertical: 20,
  },
  credentialsContainer: {
    flex: 2,
    gap: 16,
  },
  inputLabel: {
    color: Colors.darkBlack,
    fontFamily: "PoppinsMedium",
  },
  input: {
    backgroundColor: Colors.softGrey,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.softGrey,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  passwordInput: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  forgetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rememberMeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  rememberMeText: {
    fontSize: 12,
  },
  forgetPasswordText: {
    color: Colors.red,
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
  signInButton: {
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
  },
  signInButtonText: {
    color: Colors.white,
    fontFamily: "PoppinsBold",
  },
  socialLoginContainer: {
    gap: 10,
  },
  socialLoginText: {
    color: Colors.darkBlack,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    marginTop: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
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
  },
  socialButtonText: {
    color: Colors.darkPink,
    fontFamily: "PoppinsBold",
  },
});
