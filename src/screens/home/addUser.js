import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GradientLoad, Style } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HEIGHT, MAIN_COLOR, WIDTH } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { CreateUser } from "../../redux/actions/usersAction";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";

export const AddUser = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const { registeredUser } = useSelector((state) => state.Auth);
  const { isCreatingUser, userCreated } = useSelector((state) => state.Users);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setpassword] = useState("");

  const handleAddUser = () => {
    const data = {
      fname,
      lname,
      gender,
      phone,
      location,
      email,
      password,
      userType,
    };
    dispatch(CreateUser(data));
    // doneCreating();
  };

  const doneCreating = () => {
    // navigation.goBack();
    alert("user created");
  };

  // if (userCreated) {
  //   doneCreating()
  // }

  return (
    <SafeAreaView style={styles.container}>
      {isCreatingUser ? (
        <Modal transparent={true} statusBarTranslucent={true}>
          <LinearGradient colors={GradientLoad} style={{ flex: 1 }}>
            <UIActivityIndicator color={MAIN_COLOR} size={50} />
          </LinearGradient>
        </Modal>
      ) : null}
      <View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: WIDTH * 0.05 }}
        >
          <View>
            <Text style={styles.label}>First name</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              onChangeText={setfname}
              value={fname}
            />
          </View>
          <View>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              onChangeText={setlname}
              value={lname}
            />
          </View>
          <View>
            <Text style={styles.label}>gender</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              onChangeText={setGender}
              value={gender}
            />
          </View>
          <View>
            <Text style={styles.label}>District</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              onChangeText={(district) => setlocation({ district })}
              value={location}
            />
          </View>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={setphone}
              value={phone}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              value={email}
              onChangeText={setemail}
            />
          </View>
          <View>
            <Text style={styles.label}>UserType</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              value={userType}
              onChangeText={setUserType}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              // maxLength={10}
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.loginAction}>
            <TouchableOpacity style={styles.btn} onPress={handleAddUser}>
              <Text style={styles.btnText}>Add User</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: HEIGHT * 0.05,
    justifyContent: "center",
  },
  potato: {
    color: MAIN_COLOR,
    fontSize: 35,
  },
  header: {
    width: WIDTH,
    height: 120,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  screen_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    padding: 7,
    backgroundColor: MAIN_COLOR,
    width: 120,
    alignItems: "center",
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
  },
  loginAction: {
    marginBottom: 15,
    width: WIDTH * 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "grey",
    fontSize: 18,
  },
  input_field: {
    height: HEIGHT * 0.05,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    fontSize: 20,
    marginBottom: 25,
  },
});
