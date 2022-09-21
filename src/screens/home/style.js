import { StyleSheet } from "react-native";
import { HEIGHT, MAIN_COLOR, WIDTH } from "../../utils";

export const GradientLoad = ["rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)"];

export const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginVertical: 10,
    marginLeft: 15,
  },
  contentContainer: {
    marginBottom: 15,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  add: {
    alignSelf: "center",
    marginVertical: 10,
  },
  createUser: {
    marginTop: 25,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: 10,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    borderColor: MAIN_COLOR,
    borderWidth: 0.8,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: MAIN_COLOR,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    minWidth: WIDTH * 0.3,
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
    marginTop: 10,
  },
});
