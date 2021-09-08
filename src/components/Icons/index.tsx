import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLinkProps } from "@react-navigation/native";

interface Prop {
  style?: {};
  size?: number;
  color?: string;
  name?: any;
}

const isIOS = () => {
  return Platform.OS === "ios";
};

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
