import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useLayoutEffect, useState } from "react";
import Colors from "constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import CustomInput from "components/Customs/CustomInput/CustomInput";
import CustomButton from "components/Customs/CustomButton/CustomButton";
import { useAuth } from "context/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testtest");
  const [isChecked, setChecked] = useState(false);
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const router = useRouter();

  const homePage = "/(main)/(tabs)";

  const goHomePage = () => {
    console.log("Go to Home Page");
    signIn();
    router.push(homePage);
  };

  useLayoutEffect(() => {
    // Customize the top header using Expo Router's header configuration:
    const headerOptions = {
      headerShown: false,
    };

    // Ensure your navigation object is accessible:
    if (navigation) {
      navigation.setOptions(headerOptions);
    }
  }, []);

  return (
    <View style={styles.credentialsContainer}>
      <CustomInput
        inputLabel="Full Name"
        placeholder="Enter your email"
        inputValue={email}
        onChangeText={(text) => setEmail(text)}
      />

      <CustomInput
        inputLabel="Password"
        placeholder="Enter your Password"
        inputValue={password}
        onChangeText={(text) => setPassword(text)}
        isPassword={true}
      />

      {/* Forget Password */}
      <View style={styles.forgetPasswordContainer}>
        <View style={styles.rememberMeContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.rememberMeText}>Stay Logged In</Text>
        </View>
        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
      </View>

      {/* Sign In Button */}
      <CustomButton
        text="Sign In"
        btnColor="primary"
        btnSize="lg"
        onPress={() => goHomePage()}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  credentialsContainer: {
    flex: 2,
    gap: 16,
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
});
