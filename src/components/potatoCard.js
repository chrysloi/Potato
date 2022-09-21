import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { HEIGHT, MAIN_COLOR, WIDTH } from "../utils";

export const PotatoCard = ({ title, descr, image }) => {
  const description = () => {
    if (descr) {
      return alert(descr);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: HEIGHT * 0.25 }}
        source={image}
        borderRadius={15}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity onPress={description}>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            View description
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH * 0.96,
    height: HEIGHT * 0.3,
    marginStart: WIDTH * 0.02,
    marginBottom: WIDTH * 0.03,
    borderRadius: 15,
  },
  title: {
    marginStart: 10,
    marginEnd: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
