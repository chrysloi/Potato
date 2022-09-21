import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar as Bar } from "expo-status-bar";
import { PotatoCard } from "../../components/potatoCard";
import * as icons from "@expo/vector-icons";
import { MAIN_COLOR, WIDTH } from "../../utils";
import { ReportCard } from "../../components/reportCard";

export const Report = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Bar style="light" />
      {/* <View style={styles.status} /> */}
      <View style={styles.rabAction}>
        <TouchableOpacity style={styles.btn} disabled={true}>
          <Text style={styles.btnText}>Admitted report</Text>
          <Text style={styles.btnText}>13 /17</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} disabled={true}>
          <Text style={styles.btnText}>Admitted report</Text>
          <Text style={styles.btnText}>4 /17</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <ReportCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginVertical: 10,
    marginLeft: 15,
  },
  contentContainer: {
    marginBottom: 15,
  },
  status: {
    height: StatusBar.currentHeight,
    backgroundColor: MAIN_COLOR,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  userBtns: {
    marginHorizontal: 35,
  },
  rabAction: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  btn: {
    padding: 10,
    backgroundColor: MAIN_COLOR,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 15,
    minWidth: WIDTH * 0.35,
  },
});
