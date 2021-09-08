import React from "react";
import { contacts } from "../../config/data";
import { FlatList } from "react-native";
import ListItemComponent from "../../components/ListItemConponent";
import { capitalize } from "../../utility";

const Contacts = ({ navigation: navigation }: any) => {
  return (
    <>
      <FlatList
        data={contacts}
        renderItem={({ item }: any) => (
          <ListItemComponent
            item={item}
            action={() =>
              navigation.navigate("Detail", {
                contact: item,
                name: capitalize(`${item.name.first} ${item.name.last}`),
              })
            }
          />
        )}
        keyExtractor={(item) => item.email}
      />
    </>
  );
};

export default Contacts;
