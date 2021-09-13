import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { isIOS } from "../../utility";

interface Prop {
  style?: {};
  size?: number;
  color?: string;
  name?: any;
  onPress?: () => {};
}

const Icon = (prop: Prop) => {
  if (!isIOS()) {
    <MaterialIcons
      style={{ ...prop.style }}
      name={prop.name ? prop.name : "error"}
      size={prop.size ? prop.size : 40}
      color={prop.color ? prop.color : "#CCC"}
    />;
  }
  return (
    <Ionicons
      style={{ ...prop.style }}
      name={prop.name ? prop.name : "bug"}
      size={prop.size ? prop.size : 40}
      color={prop.color ? prop.color : "#CCC"}
    />
  );
};

export const ArrowForward = (prop: Prop) => {
  return (
    <Icon
      {...prop}
      name={isIOS() ? "chevron-forward-outline" : "arrow-forward"}
    />
  );
};

export const Mail = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "mail-outline" : "mail"} />;
};

export const Call = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "call-outline" : "call"} />;
};

export const Chatbox = (prop: Prop) => {
  return (
    <Icon
      {...prop}
      name={isIOS() ? "chatbox-ellipses-outline" : "chatbox-ellipses"}
    />
  );
};

export const Home = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "home-outline" : "home-sharp"} />;
};

export const Contact = (prop: Prop) => {
  return (
    <Ionicons {...prop} name={isIOS() ? "person-circle-outline" : "people"} />
  );
};

export const Person = (prop: Prop) => {
  return <Ionicons {...prop} name={isIOS() ? "person-outline" : "person"} />;
};

export const Add = (prop: Prop) => {
  return (
    <Ionicons {...prop} name={isIOS() ? "add-circle-outline" : "add-circle"} />
  );
};

export const Menu = (prop: Prop) => {
  return <Ionicons {...prop} name={isIOS() ? "ios-menu" : "menu"} />;
};
