import { StyleSheet } from "react-native";
import { HEIGHT, MAIN_COLOR, WIDTH } from "../../utils";

export const GradientLoad = ["rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)"];

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HEIGHT * 0.05,
    justifyContent: "center",
  },
  potato: {
    color: MAIN_COLOR,
    fontSize: 30,
    lineHeight: 32,
  },
  header: {
    width: WIDTH,
    height: 120,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  screen_title: {
    fontSize: 18,
    lineHeight: 20,
    // fontWeight: "bold",
  },
  btn: {
    padding: 15,
    backgroundColor: MAIN_COLOR,
    width: 120,
    alignItems: "center",
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  loginAction: {
    marginTop: 15,
    width: WIDTH * 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "grey",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
  input_field: {
    height: HEIGHT * 0.05,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    fontSize: 20,
    marginBottom: 25,
    fontFamily: "Poppins_400Regular",
  },
  footer: {
    width: WIDTH - 60,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: HEIGHT * 0.08,
  },
  btn_signup: {
    color: MAIN_COLOR,
  },
});
