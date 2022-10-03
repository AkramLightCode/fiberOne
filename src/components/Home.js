import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import constants from "../utils/constants";



const Home = (props) => {
  const width = Dimensions.get("window").width;


  const Header = () => (
    <View
      style={{
        backgroundColor: constants.themeColor,
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "space-between",
        }}
      >
        <Image source={require('../resources/fiberone.png')} style={{width:105,height:25,resizeMode:'center'}}/>
        <Icon
          onPress={() => props.navigation.navigate("Notification")}
          name="ios-notifications-outline"
          color="#fff"
          size={30}
        />
      </View>
      <Text style={{ color: "#fff", fontSize: 28, marginTop: 60 }}>
        Hello, {"\n"}
        Giannis Antetokounmpo
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <>
        <Header props={props} />
        <View style={{ padding: 20, marginTop: 40 }}>
          <Text style={{ fontSize: 20, paddingBottom: 5 }}>
            Current location
          </Text>
          <Text>
            Flat C2 Hampton Apartments; 3, Sorotana Close off Adetokunbo Ademola
            Crescent, Wuse 2, Abuja.
          </Text>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("TicketList");
              }}
              style={{
                marginBottom: 30,
                backgroundColor: constants.themeColor,
                height: 80,
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: width / 4 }}>
                <AntDesign
                  name="filetext1"
                  color={"#fff"}
                  size={25}
                  style={{ textAlign: "left" }}
                />
                <Text
                  style={{
                    color: constants.white,
                    textAlign: "center",
                    fontSize: 18,
                    paddingLeft: 20,
                  }}
                >
                  My Ticket List
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("History");
              }}
              style={{
                backgroundColor: constants.white,
                borderWidth: 1,
                borderColor: constants.themeColor,
                height: 80,
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: width / 4 }}>
                <Octicons
                  name="history"
                  color={constants.themeColor}
                  size={25}
                  style={{ textAlign: "left" }}
                />
                <Text
                  style={{
                    color: constants.themeColor,
                    textAlign: "center",
                    fontSize: 18,
                    paddingLeft: 20,
                  }}
                >
                  History
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </ScrollView>
  );
};

export default Home;
