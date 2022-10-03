import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import constants from "../utils/constants";
import Headers from "./common/Headers";

const TicketDetails = ({ navigation, route }) => {
  const { ticket } = route.params;
  // console.warn("ticket",ticket.item.status)
  const data = {
    date: "Jun 22, 2021 00:20:11",
    name: "Giannis Antetokounmpo",
    email: "name@email.com",
    phoneNo: "1234567890",
    location:
      "7a, Tunde Joda Street,Off Whitesands School Street Lekki Phase 1, Lagos.",
    query:
      "My router has been blinking red since 2 days ago and I’m unable to use the internet",
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "En Route", value: "En Route" },
  ]);
  useEffect(() => {
    const ticketNo = parseInt(ticket.index) + 1;
    const ticketStatus = ticket.status;
    navigation.setOptions({
      title: ticketNo + "# Details (" + ticketStatus + ")",
    });
  }, [navigation]);
  return (
    <>
      <Headers
        onPress={() => navigation.goBack()}
        title={"#124 Details (Opan)"}
        arrowType={false}
      />
      <View style={styles.card}>
        <Text style={styles.heading}>Ticket date: {data.date}</Text>
        <Text style={styles.heading}>Name: {data.name}</Text>
        <Text style={styles.heading}>Email address: {data.email}</Text>
        <Text style={styles.heading}>Phone number: {data.phoneNo}</Text>
        <Text style={styles.heading}>Location: {data.location}</Text>
        <Text style={styles.heading}>Query: {data.query}</Text>
        {ticket.item.status === "Open" ? (
          <Image
            source={require("../resources/router.png")}
            style={{ alignSelf: "center" }}
          />
        ) : (
          <CloseTicketView />
        )}
      </View>
      <View style={styles.card}>
        <Text
          style={{
            color: constants.textCOlor,
            fontSize: 14,
            fontWeight: "600",
            marginBottom: 5,
          }}
        >
          Change Status
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
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
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            activeOpacity={0.8}
            style={{
              backgroundColor: constants.light,
              padding: 15,
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <Icon
              name="envelope"
              size={24}
              style={{ color: constants.themeColor }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const CloseTicketView = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center" }}>Router</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center" }}>CAT56</Text>
        <TextInput style={styles.input} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 13,
    marginBottom: 13,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginVertical: 10,
    alignSelf: "center",
    marginHorizontal: 15,
    elevation: 1,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});

export default TicketDetails;
