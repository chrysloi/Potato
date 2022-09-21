import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GradientLoad, Style } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MAIN_COLOR, WIDTH } from "../../utils";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/actions/authActions";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLoggingUser } = useSelector((state) => state.Auth);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      phone: phone,
      password: password,
      // device_name: Platform.OS + "_" + Platform.Version,
    };
    dispatch(LoginUser(data));
    // setTimeout(() => props.getUserInfo(), 2000);
  };

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar style="dark" />
      {isLoggingUser ? (
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
            <Text style={[Style.potato, { fontFamily: "Poppins_500Medium" }]}>
              POTATO
            </Text>
            <Text
              style={[Style.screen_title, { fontFamily: "Poppins_500Medium" }]}
            >
              Login into your account
            </Text>
          </View>
          <View>
            <Text style={Style.label}>Phone Number</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View>
            <Text style={Style.label}>Password</Text>
            <TextInput
              style={Style.input_field}
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={Style.loginAction}>
            <TouchableOpacity>
              <Text style={{ fontFamily: "Poppins_400Regular" }}>
                Forget password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={Style.btn}>
              <Text style={Style.btnText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.footer}>
            <Text style={{ fontFamily: "Poppins_400Regular" }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={[Style.btn_signup, { fontFamily: "Poppins_400Regular" }]}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
