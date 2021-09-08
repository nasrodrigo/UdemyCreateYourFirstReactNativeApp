import React from "react";
import { FlatList } from "react-native";
import ListItemComponent from "../ListItemConponent";

interface Data {
  data: any[];
}

const ListComponent = <T extends Data>(prop: T) => {
  return (
    <>
      <FlatList
        data={prop.data}
        renderItem={({ item }) => (
          <ListItemComponent
            item={item}
            action={() => {
              return "";
            }}
          />
        )}
        keyExtractor={(item) => item.email}
      />
    </>
  );
};

export default ListComponent;
