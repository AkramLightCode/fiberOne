import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import constants from "../utils/constants";
import Modal from "react-native-modal";

const CommonModalDropdown = ({
  visible,
  setVisible,
  data,
  setData,
  items,
  setItems,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
 
      <Modal
        style={styles.main}
        animationType={"fade"}
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <View style={{ backgroundColor: "#fff", padding: 20 }}>
              <Text
                style={{
                  color: constants.dark_gray,
                  fontSize: 20,
                  marginBottom: 20,
                }}
              >
                Select Status
              </Text>
              <View
                style={{
                  borderBottomColor: constants.gray,
                  borderBottomWidth: 1,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  color: constants.gray,
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                Filter by
              </Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
              <View style={{ marginBottom: 30 }} />
              <TouchableOpacity
                onPress={() => {
                  if (value) {
                    setData(
                      data.filter((item) => item.status.toLowerCase() === value)
                    );
                    setVisible(false);
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
                  Apply filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  );
};
export default CommonModalDropdown;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
  main: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
  },
});
