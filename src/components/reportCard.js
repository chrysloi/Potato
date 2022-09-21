import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MAIN_COLOR, WIDTH } from "../utils";
import { useDispatch } from "react-redux";
import { approveReport } from "../redux/actions/reportAction";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const ReportCard = ({
  extensionOfficer,
  farmerfname,
  farmerlname,
  farmerLocate,
  offAdmitted,
  rabAdmitted,
  id,
  disease,
  comment,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Farmer:{"\t\t"}
          </Text>
          <Text style={styles.text}>
            {farmerfname ? farmerfname : null}{" "}
            {farmerlname ? farmerlname : null}
          </Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Plant review:{"\t\t"}
          </Text>
          <Text style={styles.text}>{disease}</Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            District:{"\t\t"}
          </Text>
          <Text style={styles.text}>{farmerLocate ? farmerLocate : null}</Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Extension officer:{"\t\t"}
          </Text>
          <Text style={styles.text}>
            {offAdmitted ? "Approved" : "Not approved"}
          </Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Comment:{"\t\t"}
          </Text>
          <Text style={styles.text}>{comment ? comment : null}</Text>
        </View>
        {!extensionOfficer ? (
          <View style={styles.textgr}>
            <Text style={[styles.text, { color: MAIN_COLOR }]}>
              RAB:{"\t\t"}
            </Text>
            <Text style={styles.text}>
              {rabAdmitted ? "Approved" : "Not approved"}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.textgr}>
        {extensionOfficer ? (
          offAdmitted ? (
            <TouchableOpacity>
              <Text style={[styles.text, { color: "green" }]}>Approved</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate("Approving", id)}
            >
              <Text style={styles.text}>Approve</Text>
            </TouchableOpacity>
          )
        ) : rabAdmitted ? (
          <TouchableOpacity>
            <Text style={[styles.text, { color: "green" }]}>Approved</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("Approving", id)}
          >
            <Text style={styles.text}>Approve</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WIDTH * 0.02,
    marginTop: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  textgr: {
    flexDirection: "row",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  modalView: {
    height: 200,
    width: 280,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 10 * vw,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: MAIN_COLOR,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    minWidth: WIDTH * 0.3,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  editing: {
    // borderWidth: 1,
    flexDirection: "row",
    borderWidth: 0.1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 1.5,
    justifyContent: "space-between",
  },
});
