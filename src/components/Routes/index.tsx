import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ContactList from "../../screens/Contacts/ContactList";
import ContactDetail from "../../screens/Contacts/ContactDetail";
import ContactNew from "../../screens/Contacts/ContactNew";
import User from "../../screens/User";
import Color from "../../utility/Color";
import { isIOS } from "../../utility";
import { People, Person, Add } from "../Icons";

const Stack = createNativeStackNavigator();
const Tab = isIOS()
  ? createBottomTabNavigator()
  : createMaterialBottomTabNavigator();

const ContactStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactList}
        options={{ headerTintColor: Color.steelBlue }}
      />
      <Stack.Screen
        name="Detail"
        component={ContactDetail}
        options={({ route }: any) => ({
          headerTintColor: Color.steelBlue,
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

const AddContactStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Contact"
        component={ContactNew}
        options={{ headerTintColor: Color.steelBlue }}
      />
    </Stack.Navigator>
  );
};

const MeStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Me"
        component={User}
        options={{ headerTintColor: Color.steelBlue }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const iconSize = 25;
  const iconColor = isIOS() ? Color.lightSteelBlue : Color.aliceBlue;
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Contacts"
          component={ContactStacks}
          options={{
            tabBarIcon: () => <People color={iconColor} size={iconSize} />,
          }}
        />
        <Tab.Screen
          name="Add Contact"
          component={AddContactStacks}
          options={{
            tabBarIcon: () => <Add color={iconColor} size={iconSize} />,
          }}
        />
        <Tab.Screen
          name="Me"
          component={MeStacks}
          options={{
            tabBarIcon: () => <Person color={iconColor} size={iconSize} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
