import React from "react";
import { FlatList, View, Text } from "react-native";
import constants from "../utils/constants";
import Headers from "./common/Headers";

const Notification = ({navigation}) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Assign new task #123",
      details: "New Notification regard #123.",
      date: "05 Jul 2021",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Request Approved",
      details: "Ticket no.123 product request approved",
      date: "05 Jul 2021",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "Assign new task #123",
      details: "New Notification regard #123.",
      date: "05 Jul 2021",
    },  {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Request Approved",
      details: "Ticket no.123 product request approved",
      date: "05 Jul 2021",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Headers onPress={() => navigation.goBack()} title='Notification' />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{ padding: 10, marginTop: 5 ,backgroundColor:constants.white}}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: constants.gray }}>{item.details}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{marginTop:20}}>{item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Notification;
