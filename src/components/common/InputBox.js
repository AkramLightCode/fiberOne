import React from "react";
import { Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import constants from "../../utils/constants";

const InputBox = ({ textValue, onChangeText,keyboardType }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: constants.themeColor,
        borderWidth: 1,
        borderRadius: 5,
        height: 55,
        width: "90%",
        alignSelf: "center",
        marginTop: 5,
        justifyContent: "center",
      }}
    >
      <Icon
        name="mobile-phone"
        size={30}
        style={{
          alignSelf: "center",
          color: "gray",
          opacity: 0.7,
          paddingStart: 10,
        }}
      />
      <TextInput
        value={textValue}
        placeholder="eg. 07012345678"
        style={{
          padding: 10,
          width: "90%",
          paddingStart: 10,
          fontSize: 18,
        }}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputBox;
