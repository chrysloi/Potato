import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ReportCard } from "../../../components/reportCard";
import { MAIN_COLOR, WIDTH } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getReportedDisease } from "../../../redux/actions/reportAction";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export function NotApprovedReport() {
  const dispatch = useDispatch();
  const { reportedDisease } = useSelector((state) => state.Report);
  const { loggedInUser } = useSelector((state) => state.Auth);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getReportedDisease());
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  console.log(reportedDisease);

  useEffect(() => {
    dispatch(getReportedDisease());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <FlatList
        data={reportedDisease}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => {
          if (
            !item.observation.extension_officer.admitted &&
            item.location.district === loggedInUser.location.district
          ) {
            return (
              <ReportCard
                farmerfname={item.farmer.fname}
                farmerlname={item.farmer.lname}
                farmerLocate={item.location.district}
                offAdmitted={item.observation.extension_officer.admitted}
                id={item._id}
                disease={item.disease.name}
                extensionOfficer={true}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
}

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
