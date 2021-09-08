import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Color from "../../utility/Color";

interface Prop {
  image: string;
  name: string;
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  image: {
    width: window.width / 2,
    height: window.width / 2,
    marginRight: 10,
    borderRadius: window.width / 4,
  },
  name: { color: Color.steelBlue, fontSize: 22, marginTop: 10 },
});

const ContactDetailHeader = (prop: Prop) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={{ uri: prop.image }} />
      <Text style={styles.name}>{prop.name}</Text>
    </View>
  );
};

export default ContactDetailHeader;
