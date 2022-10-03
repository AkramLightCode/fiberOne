import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import constants from "../utils/constants";
import Headers from "./common/Headers";

const TicketList = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Router installation delay",
      details:
        "You have 2 days left to renew your subscription. Renew and keep enjoying world class .",
      date: "05 Jul 2021",
      status: "Open",
      type: "Technical",
      level: "Normal",
      duration: new Date(Date.now() - 2000000),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12",
      title: "Router issue",
      details:
        "You have 2 days left to renew your subscription. Renew and keep enjoying world class .",
      date: "05 Jul 2021",
      status: "Open",
      type: "Technical",
      level: "Normal",
      duration: new Date(Date.now() - 100000000),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Router installation",
      details:
        "Engr. Bala (tel. 09012345678) will call you soon for your scheduled installation.",
      date: "05 Jul 2021",
      status: "Closed",
      type: "Technical",
      duration: new Date(Date.now() - 300000000),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3311",
      title: "No network",
      details:
        "Engr. Bala (tel. 09012345678) will call you soon for your scheduled installation.",
      date: "05 Jul 2021",
      status: "Closed",
      type: "Technical",
      duration: new Date(Date.now() - 400000000),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "System upgrade",
      details:
        "Please be informed of a planned system upgrade at your service area scheduled to hold between 2am to 6pm today, 26th Jun. Please bear with us.",
      date: "05 Jul 2021",
      status: "Open",
      type: "Technical",
      level: "Normal",
      duration: new Date(Date.now() - 500000000),
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b21a2",
      title: "System upgrade",
      details:
        "Please be informed of a planned system upgrade at your service area scheduled to hold between 2am to 6pm today, 26th Jun. Please bear with us.",
      date: "05 Jul 2021",
      status: "Closed",
      type: "Technical",
      duration: new Date(Date.now() - 800000000),
    },
  ];
  const [data, setData] = useState(DATA);
  useEffect(() => {
    DATA.sort((a, b) => new Date(b.duration) - new Date(a.duration));
    setData(DATA);
    navigation.setOptions({
      title: "Support tickets",
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <Headers
        onPress={() => navigation.goBack()}
        title="Support tickets"
        arrowType={false}
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: constants.themeColor,
          }}
        >
          Active tickets (
          {data.filter((item) => item.status.toLowerCase() === "open").length})
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        style={{ marginBottom: 40 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.card, styles.elevation]}
            key={item.id}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              {item.status === "Open" && (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "#D3E6FF",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#2F80ED" }}>{item.status}</Text>
                </View>
              )}
              {item.status === "Closed" && (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "#F5CAA2",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#BE6F27" }}>{item.status}</Text>
                </View>
              )}
            </View>
            <Text style={{ color: constants.gray, marginBottom: 10 }}>
              {item.details}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 5,
              }}
            >
              <AntDesign name="setting" size={13} style={{ paddingTop: 5 }}>
                <Text>{" " + item.type}</Text>
              </AntDesign>
              {item.level && (
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                  <MaterialIcons
                    name="error-outline"
                    size={15}
                    style={{ textAlign: "center" }}
                  />
                  <Text>{" " + item.level}</Text>
                </View>
              )}
              <Text style={{ paddingTop: 5 }}>
                {timeSince(item.duration) + " ago"}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("TicketDetails", {
                  ticket: { item, index },
                });
              }}
              style={{
                backgroundColor: constants.themeColor,
                padding: 15,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: constants.white,
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                See details
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});

export default TicketList;
