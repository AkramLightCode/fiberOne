import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import constants from "../utils/constants";
import InputBox from "./common/InputBox";

const Login = (props) => {
  const [mobile, setMobile] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
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
        }}
      >
        Login to your account
      </Text>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            color: constants.themeColor,
            paddingStart: 5,
            paddingBottom: 5,
          }}
        >
          Phone number
        </Text>
        <InputBox textValue={mobile} onChangeText={setMobile} keyboardType='numeric' />
        {/* <TextInput style={{ borderColor: constants.themeColor, width: width - 100, alignSelf: "center", borderWidth: 1, borderRadius: 5, height: 45, paddingStart: 5, fontSize: 20 }} /> */}
      </View>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            if (mobile.length) {
              props.navigation.navigate("OtpScreen", { mobile: mobile });
            }
          }}
          style={{
            backgroundColor: constants.themeColor,
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: constants.white,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
