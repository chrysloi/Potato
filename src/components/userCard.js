import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MAIN_COLOR, WIDTH } from "../utils";
import * as icons from "@expo/vector-icons";

export const UserCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Username:{"\t\t"}
          </Text>
          <Text style={styles.text}>
            {props.userfname} {props.userlname}
          </Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Phone:{"\t\t"}
          </Text>
          <Text style={styles.text}>{props.phone}</Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Location:{"\t\t"}
          </Text>
          <Text style={styles.text}>{props.location}</Text>
        </View>
        <View style={styles.textgr}>
          <Text style={[styles.text, { color: MAIN_COLOR }]}>
            Type:{"\t\t"}
          </Text>
          <Text style={styles.text}>{props.type}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={props.delete}>
        <icons.AntDesign name="deleteuser" color={"red"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WIDTH * 0.02,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  textgr: {
    flexDirection: "row",
  },
});
