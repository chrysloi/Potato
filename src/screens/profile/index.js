import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import { GradientLoad, Style } from "./style";
import { ProfileOpt } from "../../components/profileOpt";
import * as icons from "@expo/vector-icons";
import { MAIN_COLOR } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/actions/index ";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.Auth);
  console.log(loggedInUser);

  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Style.visual}>
        <Image
          source={require("../../../assets/avatar.png")}
          style={Style.image}
        />
        <View style={Style.profiledetail}>
          <Text style={[Style.name]}>
            {loggedInUser.fname} {loggedInUser.lname}
          </Text>
          <Text style={Style.role}>{loggedInUser.userType}</Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 25,
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleLogout}
        >
          <icons.FontAwesome name="sign-out" size={25} color={MAIN_COLOR} />
        </TouchableOpacity>
      </View>
      <ScrollView style={Style.profile_op} showsVerticalScrollIndicator={false}>
        <ProfileOpt
          title="Profile"
          content="Complete profile"
          icon={
            <icons.MaterialCommunityIcons
              name="account-details"
              size={25}
              color={MAIN_COLOR}
            />
          }
          navigate={() => navigation.navigate("UserDetails")}
        />
        <ProfileOpt
          title="Term & Privacy"
          content="Read Term and Conditions of use"
          icon={
            <icons.MaterialIcons
              name="privacy-tip"
              size={25}
              color={MAIN_COLOR}
            />
          }
          navigate={() => navigation.navigate("Other")}
        />
        <ProfileOpt
          title="Help"
          content="Get help"
          icon={<icons.Entypo name="help" size={25} color={MAIN_COLOR} />}
          navigate={() => navigation.navigate("Other")}
        />
        <ProfileOpt
          title="About Us"
          content="Read about us"
          icon={
            <icons.AntDesign name="infocirlce" size={25} color={MAIN_COLOR} />
          }
          navigate={() => navigation.navigate("Other")}
        />
        {/* <View style={Style.logout}>
          <TouchableOpacity style={Style.containerLog} onPress={handleLogout}>
            <icons.FontAwesome name="sign-out" size={25} color={MAIN_COLOR} />
            <View style={Style.details}>
              <Text style={[{ fontSize: 18 }, Style.font]}>Logout</Text>
              <Text style={[{ opacity: 0.5, fontSize: 15 }, Style.font]}>
                Sign Out in the application
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
