import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Color from "../../utility/Color";
import { capitalize } from "../../utility";
import { ArrowForward } from "../Icons";

interface Item {
  item: any;
  action: () => {};
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  image: { width: 40, height: 40, marginRight: 10, borderRadius: 20 },
  name: { color: Color.steelBlue },
  email: { color: Color.lightSteelBlue },
  iconContent: { flex: 1 },
  icon: { alignSelf: "flex-end" },
});

const ListItemComponent = <T extends Item>(prop: T) => {
  return (
    <TouchableOpacity onPress={prop.action} style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{ uri: prop.item.picture.thumbnail }}
      />
      <View>
        <Text style={styles.name}>
          {capitalize(`${prop.item.name.first} ${prop.item.name.last}`)}
        </Text>
        <Text style={styles.email}>{prop.item.email}</Text>
      </View>
      <View style={styles.iconContent}>
        <ArrowForward style={styles.icon} size={20} color={Color.steelBlue} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItemComponent;
