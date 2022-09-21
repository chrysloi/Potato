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
      {/* <ScrollView style={{ flex: 1 }}>
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
      </ScrollView> */}
      <TouchableOpacity
        style={Style.add}
        onPress={() => navigation.navigate("TakeImage")}
      >
        <icons.AntDesign name="pluscircle" size={50} color={MAIN_COLOR} />
      </TouchableOpacity>
      <FlatList
        data={diseases}
        renderItem={(item) => {
          return (
            <PotatoCard
              title={item.item.title}
              descr={item.item.description}
              image={item.item.image}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const diseases = [
  {
    key: 1,
    image: require("../../../assets/healthy.jpg"),
    title: "Healthy",
    description:
      "If your sweet potato is oozing, soft and squishy, discolored, smelly, or have a bunch of sprouts, it's time to toss. If there are only a few sprouts and the sweet potato is still firm you can cut the sprouted portion off, cook and eat right away, or you can plant it!",
  },
  {
    key: 2,
    image: require("../../../assets/early.jpg"),
    title: "Early blight",
    description:
      "Alternaria solani is a fungal pathogen that produces a disease in tomato and potato plants called early blight. The pathogen produces distinctive 'bullseye' patterned leaf spots and can also cause stem lesions and fruit rot on tomato and tuber blight on potato.",
  },
  {
    key: 3,
    image: require("../../../assets/late.jpg"),
    title: "Late blight",
    description:
      "Phytophthora infestans is an oomycete or water mold, a fungus-like microorganism that causes the serious potato and tomato disease known as late blight or potato blight.",
  },
];
