import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MAIN_COLOR } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { reportScan, resetScan, Scan } from "../../redux/actions/scanAction";
import { LinearGradient } from "expo-linear-gradient";
import { UIActivityIndicator } from "react-native-indicators";
import { GradientLoad } from "../auth/style";
import * as DocumentPicker from "expo-document-picker";
import * as ImageManipulator from "expo-image-manipulator";

export const ScanLeaf = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { result, isScanning, scanDone } = useSelector((state) => state.Scan);

  const [image, setImage] = useState(null);
  const [report, setreport] = useState();
  let disease;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // if (result) {
  //   setreport({ disease: { name: result, description: "" } });
  //   console.log(report);
  // }

  const handleScan = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", {
        uri: image,
        type: "image/png",
        name: "image.png",
      });
      formData.append("Content-Type", "image/jpg");
      dispatch(Scan(formData));
    } else {
      alert("Please select an image");
    }
  };

  const handleResult = () =>
    Alert.alert("Your potato result is: ", result, [
      {
        text: "Report",
        onPress: () => {
          console.log("Reporting results");
          navigation.goBack();
          dispatch(reportScan({ disease }));
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          navigation.goBack();
          dispatch(resetScan());
        },
      },
    ]);

  if (scanDone) {
    handleResult();
    disease = { name: result, description: "" };
    console.log(disease);
    // setreport(disease);
    // console.log(report);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {isScanning ? (
        <Modal transparent={true} statusBarTranslucent={true}>
          <LinearGradient colors={GradientLoad} style={{ flex: 1 }}>
            <UIActivityIndicator color={MAIN_COLOR} size={50} />
          </LinearGradient>
        </Modal>
      ) : null}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Button title="Pick an image from camera roll" /> */}
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, marginBottom: 20 }}
          />
        )}
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <Text style={{ color: "#fff", fontFamily: "Poppins_400Regular" }}>
            Pick an image from camera roll
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleScan}>
          <Text style={{ color: "#fff", fontFamily: "Poppins_400Regular" }}>
            Scan Image
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: MAIN_COLOR,
    // width: 120,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
});
