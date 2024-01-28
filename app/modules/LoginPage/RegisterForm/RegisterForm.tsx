import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "../../../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [genderPreferences, setGenderPreferences] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(99);
  const [jobEducation, setJobEducation] = useState("");
  const [interestsHobbies, setInterestsHobbies] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleValuesChange = useCallback((min: number, max: number) => {
    setAgeMin(min);
    setAgeMax(max);
  }, []);

  return (
    <View style={{ flex: 2, gap: 16 }}>
      {/* Full Name Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Full Name
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Enter your Full Name"
        keyboardType="default"
        autoCapitalize="none"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email or Username */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
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
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
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

      {/* Repeat Password Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Confirm Password
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
          placeholder="Repeat your Password"
          secureTextEntry={!showPassword}
          value={passwordRepeat}
          onChangeText={(text) => setPasswordRepeat(text)}
        />

        <TouchableOpacity onPress={toggleShowPassword}>
          <FontAwesome5
            name={showPassword ? "eye-slash" : "eye"}
            size={20}
            color={Colors.darkBlack}
          />
        </TouchableOpacity>
      </View>

      {/* Gender Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Gender
      </Text>
      <Picker
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
          color: Colors.darkGrey,
        }}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select your gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      {/* Date of Birth Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Date of Birth
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Enter your date of birth"
        keyboardType="default"
        autoCapitalize="none"
        value={dob}
        onChangeText={(text) => setDob(text)}
      />

      {/* About Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        About Me
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Tell us about yourself"
        keyboardType="default"
        autoCapitalize="none"
        multiline
        numberOfLines={3}
        value={aboutMe}
        onChangeText={(text) => setAboutMe(text)}
      />

      {/* Location Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Location
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Where do you live?"
        keyboardType="default"
        autoCapitalize="none"
        multiline
        numberOfLines={3}
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      {/* Gender Preferences Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Gender Preference
      </Text>
      <Picker
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
          color: Colors.darkGrey,
        }}
        selectedValue={genderPreferences}
        onValueChange={(itemValue) => setGenderPreferences(itemValue)}
      >
        <Picker.Item label="Select your gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      {/* Age Range */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text
          style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}
        >
          Age Range:
        </Text>
        <Text style={{ color: Colors.darkPink, fontFamily: "PoppinsSemiBold" }}>
          {ageMin}
        </Text>
        <Text
          style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}
        >
          -
        </Text>
        <Text style={{ color: Colors.darkPink, fontFamily: "PoppinsSemiBold" }}>
          {ageMax}
        </Text>
      </View>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Age Range"
        keyboardType="default"
        autoCapitalize="none"
        value={ageRange}
        onChangeText={(text) => setAgeRange(text)}
      />

      {/* Job Education Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Job/Education
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="What's your Job/Education?"
        keyboardType="default"
        autoCapitalize="none"
        value={jobEducation}
        onChangeText={(text) => setJobEducation(text)}
      />

      {/* Interest Hobbies Section */}
      <Text style={{ color: Colors.darkBlack, fontFamily: "PoppinsSemiBold" }}>
        Interest/Hobbies
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.softGrey,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        placeholder="Your favourites Hobbies/Interests?"
        keyboardType="default"
        autoCapitalize="none"
        value={jobEducation}
        onChangeText={(text) => setJobEducation(text)}
      />

      {/* Register Button */}
      <TouchableOpacity
        style={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          backgroundColor: Colors.darkPink,
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 30,
          marginTop: 16,
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
        <Text style={{ color: Colors.white, fontFamily: "PoppinsBold" }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({});
