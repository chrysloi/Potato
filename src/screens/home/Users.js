import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { UserCard } from "../../components/userCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../redux/actions/usersAction";
import { GradientLoad, Style } from "./style";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";
import { MAIN_COLOR } from "../../utils";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Users = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { allUsers, isLoadingUsers } = useSelector((state) => state.Users);
  const { loggedInUser } = useSelector((state) => state.Auth);

  const [isLoading, setIsLoading] = useState(isLoadingUsers);
  // console.log(isLoadingUsers);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getAllUsers());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleDeleteUser = (phone) => {
    dispatch(deleteUser(phone));
    // dispatch(getAllUsers());
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar style="light" /> */}
      <TouchableOpacity
        style={[Style.btn, { marginTop: 15, marginHorizontal: 15 }]}
        onPress={() => navigation.navigate("AddUser")}
      >
        <Text style={Style.btnText}>Add User</Text>
      </TouchableOpacity>
      {isLoadingUsers ? (
        <UIActivityIndicator color={MAIN_COLOR} size={50} />
      ) : (
        <>
          <FlatList
            data={allUsers}
            renderItem={({ item }) => {
              if (item.phone !== loggedInUser.phone) {
                return (
                  <UserCard
                    key={item._id}
                    userfname={item.fname}
                    userlname={item.lname}
                    phone={item.phone}
                    location={item.location.district}
                    type={item.userType}
                    delete={() => handleDeleteUser(item.phone)}
                  />
                );
              }
            }}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        </>
      )}
    </SafeAreaView>
  );
};
