import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

interface InputProps {
  isPassword?: boolean;
  inputLabel: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  inputValue: string;
  onChangeText: (text: string) => void;
}

const CustomInput = ({
  isPassword,
  inputLabel,
  keyboardType,
  placeholder,
  inputValue,
  onChangeText,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Text style={{ color: Colors.darkBlack, fontWeight: "500" }}>
        {inputLabel}
      </Text>
      {isPassword ? (
        <View style={isPassword ? styles.passwordInputContainer : null}>
          <TextInput
            style={{
              flex: 1,
              padding: 0,
              margin: 0,
            }}
            placeholder={placeholder}
            value={inputValue}
            onChangeText={onChangeText}
            secureTextEntry={isPassword ? !showPassword : false}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <FontAwesome5
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color={Colors.darkBlack}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={{
            backgroundColor: Colors.softGrey,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 8,
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={inputValue}
          onChangeText={onChangeText}
          secureTextEntry={isPassword ? !showPassword : false}
        />
      )}
    </>
  );
};

CustomInput.defaultProps = {
  keyboardType: "default",
  // other default props...
};

export default CustomInput;

const styles = StyleSheet.create({
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.softGrey,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
