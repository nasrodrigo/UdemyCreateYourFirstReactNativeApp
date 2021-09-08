import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Color from "../../utility/Color";
import { Mail, Home, Call, Chatbox } from "../../components/Icons";

interface Prop {
  label: string;
  body: string;
  actions: { icon: string; action: () => null };
}

const styles = StyleSheet.create({
  label: { color: Color.steelBlue, fontSize: 12 },
  body: { color: Color.lightSlateGray, fontSize: 16 },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Color.gainsboroGray,
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

const ContactDetailActions = (prop: Prop) => {
  const iconColor = Color.steelBlue;
  const iconSize = 20;
  const getIcon = (value: string) => {
    switch (value.toUpperCase()) {
      case "EMAIL":
        return (
          <TouchableOpacity
            style={styles.rowIcon}
            onPress={prop.actions.action}
          >
            <Mail size={iconSize} color={iconColor} style={styles.icon} />
          </TouchableOpacity>
        );
        break;
      case "CELL":
        return (
          <View style={styles.rowIcon}>
            <View style={styles.icon}>
              <TouchableOpacity
                onPress={prop.actions.action}
                style={{ marginRight: 10 }}
              >
                <Call size={iconSize} color={iconColor} />
              </TouchableOpacity>
              <TouchableOpacity onPress={prop.actions.action}>
                <Chatbox size={iconSize} color={iconColor} />
              </TouchableOpacity>
            </View>
          </View>
        );
        break;
      case "HOME":
        return (
          <TouchableOpacity
            style={styles.rowIcon}
            onPress={prop.actions.action}
          >
            <Home size={iconSize} color={iconColor} style={styles.icon} />
          </TouchableOpacity>
        );
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{prop.label}</Text>
      <View style={styles.rowAction}>
        <Text style={styles.body}>{prop.body}</Text>
        {getIcon(prop.actions.icon)}
      </View>
    </View>
  );
};

export default ContactDetailActions;
