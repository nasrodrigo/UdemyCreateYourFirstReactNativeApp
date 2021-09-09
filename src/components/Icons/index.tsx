import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { isIOS } from "../../utility";

interface Prop {
  style?: {};
  size?: number;
  color?: string;
  name?: any;
  onPress?: () => {};
}

const Icon = (prop: Prop) => {
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
    <Icon {...prop} name={isIOS() ? "ios-arrow-forward" : "md-arrow-forward"} />
  );
};

export const Mail = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "ios-mail" : "md-mail"} />;
};

export const Call = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "ios-call" : "md-call"} />;
};

export const Chatbox = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "ios-chatbox" : "md-chatbox"} />;
};

export const Home = (prop: Prop) => {
  return <Icon {...prop} name={isIOS() ? "ios-home" : "md-home"} />;
};

export const People = (prop: Prop) => {
  return (
    <Ionicons {...prop} name={isIOS() ? "ios-people" : "md-people-outline"} />
  );
};

export const Person = (prop: Prop) => {
  return (
    <Ionicons {...prop} name={isIOS() ? "ios-person" : "md-person-outline"} />
  );
};

export const Add = (prop: Prop) => {
  return (
    <Ionicons
      {...prop}
      name={isIOS() ? "ios-add-circle" : "md-add-circle-outline"}
    />
  );
};

export const Menu = (prop: Prop) => {
  return <Ionicons {...prop} name={isIOS() ? "ios-menu" : "md-menu"} />;
};
