import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GradientLoad, Style } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MAIN_COLOR, WIDTH } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../redux/actions/authActions";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";

export const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { registeredUser, isRegisteringUser } = useSelector(
    (state) => state.Auth
  );

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleRegister = () => {
    console.log(fname, lname, gender, phone, location, email);
    dispatch(
      Register({ fname, lname, gender, phone, location, email, password })
    );
  };

  return (
    <SafeAreaView style={Style.container}>
      {isRegisteringUser ? (
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
          <View style={Style.header}>
            <Text style={[Style.potato, { fontFamily: "Poppins_400Regular" }]}>
              POTATO
            </Text>
            <Text
              style={[Style.screen_title, { fontFamily: "Poppins_400Regular" }]}
            >
              Create a new account
            </Text>
          </View>
          <View>
            <Text style={Style.label}>First name</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              onChangeText={setfname}
              value={fname}
            />
          </View>
          <View>
            <Text style={Style.label}>Last Name</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              onChangeText={setlname}
              value={lname}
            />
          </View>
          <View>
            <Text style={Style.label}>gender</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              onChangeText={setGender}
              value={gender}
            />
          </View>
          <View>
            <Text style={Style.label}>District</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              onChangeText={(district) => setlocation({ district })}
              value={location}
            />
          </View>
          <View>
            <Text style={Style.label}>Phone Number</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={setphone}
              value={phone}
            />
          </View>
          <View>
            <Text style={Style.label}>Email</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              value={email}
              onChangeText={setemail}
            />
          </View>
          <View>
            <Text style={Style.label}>Password</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              // keyboardType="number-pad"
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
            />
          </View>
          <View style={Style.loginAction}>
            <TouchableOpacity onPress={handleRegister} style={Style.btn}>
              <Text style={Style.btnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={[Style.footer, { marginBottom: 30 }]}>
            <Text style={{ fontFamily: "Poppins_400Regular" }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[Style.btn_signup, { fontFamily: "Poppins_400Regular" }]}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
