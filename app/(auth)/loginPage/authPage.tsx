import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import LoginForm from "../../../components/AuthPage/LoginForm/LoginForm";
import RegisterForm from "../../../components/AuthPage/RegisterForm/RegisterForm";
import Colors from "../../../constants/Colors";
import LogoHeadline from "../../../components/AuthPage/LogoHeadline/LogoHeadline";
import CustomButton from "../../../components/Customs/CustomButton/CustomButton";
import SocialMediaLogin from "../../../components/AuthPage/SocialMediaLogin/SocialMediaLogin";
import { useAuth } from "../../../context/auth";

const AuthPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleFormChange = (newValue: boolean) => {
    setShowLoginForm(newValue);
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
        <LogoHeadline />

        {/* Login & Register Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <CustomButton
            btnColor={showLoginForm ? "primary" : "secondary"}
            btnSize="md"
            text="Login"
            onPress={() => handleFormChange(true)}
          />

          <CustomButton
            btnColor={!showLoginForm ? "primary" : "secondary"}
            btnSize="md"
            text="Register"
            onPress={() => handleFormChange(false)}
          />
        </View>

        {/* Horizontal Barrier */}
        <View style={styles.horizontalBar} />

        {showLoginForm ? (
          <>
            {/* Login Form */}
            <LoginForm />
          </>
        ) : (
          <>
            {/* Registration Form */}
            <RegisterForm />
          </>
        )}

        {/* Social Media Login */}
        <SocialMediaLogin />
      </View>
    </ScrollView>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.darkPink,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  loginButtonText: {
    color: Colors.white,
    fontWeight: "900",
  },
  registerButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  registerButtonText: {
    fontWeight: "900",
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
    fontWeight: "500",
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
    fontSize: 12,
  },
  signInButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.darkPink,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  signInButtonText: {
    color: Colors.white,
    fontWeight: "900",
  },
  socialLoginContainer: {
    gap: 10,
  },
  socialLoginText: {
    color: Colors.darkBlack,
    fontWeight: "500",
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  socialButtonText: {
    color: Colors.darkPink,
    fontWeight: "900",
  },
});
