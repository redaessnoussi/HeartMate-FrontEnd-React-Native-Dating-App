import { Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "../../../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import CustomInput from "../../Customs/CustomInput/CustomInput";
import CustomButton from "../../Customs/CustomButton/CustomButton";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
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

  const handleValuesChange = useCallback((min: number, max: number) => {
    setAgeMin(min);
    setAgeMax(max);
  }, []);

  return (
    <View style={{ flex: 2, gap: 16 }}>
      {/* Full Name Section */}
      <CustomInput
        inputLabel="Full Name"
        placeholder="Enter your Full Name"
        inputValue={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email or Username */}
      <CustomInput
        inputLabel="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        inputValue={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Section */}
      <CustomInput
        inputLabel="Password"
        placeholder="Enter your Password"
        inputValue={password}
        onChangeText={(text) => setPassword(text)}
        isPassword={true}
      />

      {/* Confirm Password Section */}
      <CustomInput
        inputLabel="Password"
        placeholder="Repeat your Password"
        inputValue={passwordRepeat}
        onChangeText={(text) => setPasswordRepeat(text)}
        isPassword={true}
      />

      {/* Gender Section */}
      <Text style={{ color: Colors.darkBlack, fontWeight: "500" }}>Gender</Text>
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
      <CustomInput
        inputLabel="Date of Birth"
        placeholder="Enter your date of birth"
        inputValue={dob}
        onChangeText={(text) => setDob(text)}
      />

      {/* About Section */}
      <Text style={{ color: Colors.darkBlack, fontWeight: "500" }}>
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
      <CustomInput
        inputLabel="Location"
        placeholder="Where do you live?"
        inputValue={location}
        onChangeText={(text) => setLocation(text)}
      />

      {/* Gender Preferences Section */}
      <Text style={{ color: Colors.darkBlack, fontWeight: "500" }}>
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
      <CustomInput
        inputLabel={`Age Range: ${ageMin} - ${ageMax}`}
        placeholder="Age Range"
        inputValue={ageRange}
        onChangeText={(text) => setAgeRange(text)}
      />

      {/* Job Education Section */}
      <CustomInput
        inputLabel="Job/Education"
        placeholder="What's your Job/Education?"
        inputValue={jobEducation}
        onChangeText={(text) => setJobEducation(text)}
      />

      {/* Interest Hobbies Section */}
      <CustomInput
        inputLabel="Interest/Hobbies"
        placeholder="Your favourites Hobbies/Interests?"
        inputValue={interestsHobbies}
        onChangeText={(text) => setInterestsHobbies(text)}
      />

      {/* Register Button */}
      <CustomButton
        btnSize="lg"
        btnColor="primary"
        text="Register"
        onPress={() => console.log("Register")}
      />
    </View>
  );
};

export default RegisterForm;
