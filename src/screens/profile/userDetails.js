import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export const UserDetails = () => {
  const { loggedInUser } = useSelector((state) => state.Auth);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.text]}>Names: </Text>
        <Text style={[styles.cardContent, styles.text]}>
          {loggedInUser.fname} {loggedInUser.lname}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.text]}>Email: </Text>
        <Text style={[styles.cardContent, styles.text]}>
          {loggedInUser.email}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.text]}>Phone: </Text>
        <Text style={[styles.cardContent, styles.text]}>
          {loggedInUser.phone}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.text]}>District: </Text>
        <Text style={[styles.cardContent, styles.text]}>
          {loggedInUser.location.district}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.text]}>User Type: </Text>
        <Text style={[styles.cardContent, styles.text]}>
          {loggedInUser.userType}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
});
