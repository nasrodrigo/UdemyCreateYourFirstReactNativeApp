import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../../screens/Contacts";
import ContactDetail from "../../screens/Contacts/ContactDetail";
import Color from "../../utility/Color";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ headerTintColor: Color.steelBlue }}
        />
        <Stack.Screen
          name="Detail"
          component={ContactDetail}
          options={({ route }: any) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
