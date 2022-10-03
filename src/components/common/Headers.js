import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import constants from "../../utils/constants";
import MaterialIcons from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

export default function Headers({
  title,
  onPress,
  filter,
  onClick,
  arrowType,
}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={constants.white} barStyle="dark-content" />
      <View style={{ flex: 0.2 }}>
        {arrowType == true ? (
          <Feather
            name={"x"}
            size={25}
            style={{ color: constants.black }}
            onPress={onPress}
          />
        ) : (
          <MaterialIcons
            name={"arrowleft"}
            size={25}
            style={{ color: constants.black }}
            onPress={onPress}
          />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flex: 0.2, alignItems: "flex-end" }}>
        {filter && (
          <TouchableOpacity activeOpacity={0.8} onPress={onClick}>
            <Image
              resizeMode="contain"
              source={require("../../resources/sliders.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation:2
  },
  title: {
    fontSize: 18,
    color: constants.black,
    fontWeight: "500",
    marginLeft: 10,
    flex: 0.6,
    textAlign: "center",
  },
});
