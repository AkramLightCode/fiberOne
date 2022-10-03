import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Headers from "./common/Headers";
import constants from "../utils/constants";

export default function Chat({ navigation }) {
  const [message, setMessage] = useState("");

  const DATA = [1];

  const renderItem = () => {
    return (
      <>
        <View style={styles.chat}>
          <Text style={styles.chatTxt}>
            Hello, what would you like help with today?
          </Text>
        </View>
        <View style={styles.chat2}>
          <Text style={[styles.chatTxt,{color:constants.white}]}>
            Hello, what would you like help with today?
          </Text>
        </View>
      </>
    );
  };

  return (
    <View
      style={{ flex: 1, paddingBottom: 10, backgroundColor: constants.white }}
    >
      <Headers
        title="Chat"
        arrowType={true}
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={{ marginTop: "auto" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../resources/Gray.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text style={styles.userName}>Akinola Fagbemi</Text>
          </View>
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Write a reply..."
        placeholderTextColor="#DCDFE2"
        value={message}
        onChangeText={(v) => setMessage(v)}
      />
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonTxt}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    marginHorizontal: 15,
    borderRadius: 7,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  button: { marginLeft: "auto", marginRight: 15, marginTop: 15 },
  buttonTxt: { color: constants.black, fontSize: 15, fontWeight: "500" },
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: constants.white,
    marginBottom: 20,
    justifyContent: "flex-end",
    paddingVertical: 15,
    elevation: 2,
    marginTop: 1,
  },
  userName: { color: constants.dark_gray, marginLeft: 10, fontWeight: "500" },
  chat: {
    padding: 10,
    backgroundColor: constants.bgc,
    borderRadius: 15,
    marginTop: 15,
    width: "70%",
  },
  chatTxt: { fontSize: 16, fontWeight: "500", color: constants.text },
  chat2 : {
    padding: 10,
    backgroundColor: constants.blue,
    borderRadius: 15,
    marginTop: 15,
    width: "70%",
    marginLeft:"auto"
  },
});
