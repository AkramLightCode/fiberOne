import React, { useEffect, useState } from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import constants from "../utils/constants";
import Entypo from "react-native-vector-icons/Entypo";
import CommonModalDropdown from "./ModalDropdown";
import Headers from "./common/Headers";

const History = (props) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Your subscription plan validity will expire soon",
      details:
        "You have 2 days left to renew your subscription. Renew and keep enjoying world class .",
      date: "05 Jul 2021",
      status: "Open",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "Router installation",
      details:
        "Engr. Bala (tel. 09012345678) will call you soon for your scheduled installation.",
      date: "05 Jul 2021",
      status: "Finish",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
      title: "System upgrade",
      details:
        "Please be informed of a planned system upgrade at your service area scheduled to hold between 2am to 6pm today, 26th Jun. Please bear with us.",
      date: "05 Jul 2021",
      status: "Start",
    },
  ];
  const [items, setItems] = useState([
    { label: "Open", value: "open" },
    { label: "Finish", value: "finish" },
    { label: "Start", value: "start" },
  ]);
  const [data, setData] = useState(DATA);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Entypo onPress={() => setVisible(true)} name="sound-mix" size={20} />
      ),
    });
  }, [props.navigation]);

  return (
    <View style={{flex:1}}>
      <Headers
        onPress={() => props.navigation.goBack()}
        title={"History"}
        filter
        onClick={() => setVisible(true)}
        arrowType={false}
      />

      <CommonModalDropdown
        visible={visible}
        setVisible={setVisible}
        items={items}
        setItems={setItems}
        data={DATA}
        setData={setData}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={{ padding: 10, borderWidth: 0.2, marginBottom: 5 }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: constants.gray }}>{item.details}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ paddingTop: 5 }}>{item.date}</Text>
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
              {item.status === "Finish" && (
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
              {item.status === "Start" && (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "rgba(144, 238, 144, 0.5)",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#52BA49" }}>{item.status}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default History;
