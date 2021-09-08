import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Color from "../../utility/Color";

interface Prop {
  label: string;
  body: string;
}

const styles = StyleSheet.create({
  label: { color: Color.steelBlue, fontSize: 12 },
  body: { color: Color.lightSlateGray, fontSize: 16 },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowAction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rowIcon: { flex: 1 },
  icon: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
});

const ContactDetailRow = (prop: Prop) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{prop.label}</Text>
      <Text style={styles.body}>{prop.body}</Text>
    </View>
  );
};

export default ContactDetailRow;
