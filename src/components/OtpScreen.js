import React, { useRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../utils/constants";
import OTPTextInput from "react-native-otp-textinput";

const OtpScreen = (props) => {
  const { mobile } = props.route.params;
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View style={{ marginBottom: 30 }}>
        <Image
        resizeMode='contain'
          source={require("../resources/Fiberone1.png")}
          style={{ width: 220, alignSelf: "center" }}
        />
        <Text
          style={{
            color: constants.themeColor,
            textAlign: "center",
            paddingTop: 5,
            fontSize: 18,
            alignSelf: "center",
          }}
        >
          Enter the OTP code
        </Text>
      </View>
      <Text style={{ color: constants.gray }}>
        Please enter the reset code that was sent to:
      </Text>
      <Text
        style={{
          color: constants.dark_gray,
          textAlign: "center",
          paddingTop: 5,
        }}
      >
        {mobile}
      </Text>
      <OTPTextInput
        ref={(e) => (otpInput = e)}
        containerStyle={{ marginTop: 20, marginBottom: 10 }}
        keyboardType="numeric"
        tintColor={constants.themeColor}
        textInputStyle={styles.roundedTextInput}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Text>Didn’t receive reset code?</Text>
        <Text
          style={{
            color: constants.themeColor,
            textDecorationLine: "underline",
          }}
        >
          Resend code
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: constants.white,
            borderWidth: 1,
            borderColor: constants.themeColor,
            padding: 15,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: constants.themeColor,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={{
            backgroundColor: constants.themeColor,
            padding: 15,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: constants.white,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 1.5,
    borderColor: constants.themeColor,
  },
});

export default OtpScreen;
