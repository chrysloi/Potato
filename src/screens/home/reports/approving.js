import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MAIN_COLOR, WIDTH } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { approveReport } from "../../../redux/actions/reportAction";
import { useState } from "react";

export const Approving = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");

  console.log(comments);
  console.log(route.params);

  const approve = () => {
    dispatch(approveReport(route.params, comments));
  };
  return (
    <View style={styles.modal}>
      <View style={styles.modalView}>
        <TextInput
          placeholder="Add a comment"
          placeholderTextColor={"#c9c9c9"}
          onChangeText={(text) => setComments(text)}
          // multiline
          // style={{ width: "90%", fontFamily: "Poppins_400Regular" }}
          style={styles.editing}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn} onPress={approve}>
            <Text style={{ fontFamily: "Poppins_400Regular", color: "#fff" }}>
              done
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontFamily: "Poppins_400Regular", color: "#fff" }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    height: 200,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 10 * vw,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: MAIN_COLOR,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    minWidth: WIDTH * 0.3,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  editing: {
    // borderWidth: 1,
    width: "90%",
    flexDirection: "row",
    borderWidth: 0.1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 1.5,
    justifyContent: "space-between",
  },
});
