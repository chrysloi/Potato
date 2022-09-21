import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { PotatoCard } from "../../components/potatoCard";
import { Style } from "./style";
import * as icons from "@expo/vector-icons";
import { MAIN_COLOR } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ReportCard } from "../../components/reportCard";
import { getReportedDisease } from "../../redux/actions/reportAction";
import { ApprovedReport } from "./reports/approvedReport";
import { NotApprovedReport } from "./reports/notApprovedReport";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.Auth);
  const { reportedDisease } = useSelector((state) => state.Report);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getReportedDisease());
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    dispatch(getReportedDisease());
  }, []);

  // For the rab user
  if (loggedInUser.userType === "rab") {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={Style.rabAction}>
          <TouchableOpacity
            style={Style.btn}
            onPress={() => navigation.navigate("Users")}
          >
            <Text style={Style.btnText}>Manage users</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={reportedDisease}
          renderItem={({ item }) => {
            if (item.observation.extension_officer.admitted) {
              return (
                <ReportCard
                  farmerfname={item.farmer.fname}
                  farmerlname={item.farmer.lname}
                  farmerLocate={item.location.district}
                  rabAdmitted={item.observation.rab.admitted}
                  offAdmitted={item.observation.extension_officer.admitted}
                  comment={item.observation.extension_officer.admitted}
                  // comment={item.observation.extension_officer.comments}
                  disease={item.disease.name}
                  id={item._id}
                  extensionOfficer={false}
                />
              );
            }
          }}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </SafeAreaView>
    );
  }

  // for the Extension officer user
  if (loggedInUser.userType === "extension_officer") {
    const Tab = createMaterialTopTabNavigator();

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: MAIN_COLOR,
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerTitleAlign: "center",
            headerStatusBarHeight: 30,
            tabBarActiveTintColor: MAIN_COLOR,
            tabBarInactiveTintColor: "grey",
            tabBarIndicatorStyle: {
              backgroundColor: MAIN_COLOR,
            },
            tabBarLabelStyle: {
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
            },
          }}
        >
          <Tab.Screen
            name="OfficerReport"
            component={ApprovedReport}
            options={{ tabBarLabel: "Approved Reports" }}
          />
          <Tab.Screen
            name="FarmerReport"
            component={NotApprovedReport}
            options={{ tabBarLabel: "Reports not Approved" }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }

  // For the Farmer
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1 }}>
        <View style={Style.contentContainer}>
          <Text style={Style.titleText}>Infected</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PotatoCard title={"Potato Brown"} />
            <PotatoCard title={"Brown"} />
          </ScrollView>
        </View>
        <View style={Style.contentContainer}>
          <Text style={Style.titleText}>Fresh</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PotatoCard title={"Kinigi"} />
            <PotatoCard title={"Potato"} />
          </ScrollView>
        </View>
        <TouchableOpacity
          style={Style.add}
          onPress={() => navigation.navigate("TakeImage")}
        >
          <icons.AntDesign name="pluscircle" size={50} color={MAIN_COLOR} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
