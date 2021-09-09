import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactList from "../../screens/Contacts/ContactList";
import ContactDetail from "../../screens/Contacts/ContactDetail";
import ContactNew from "../../screens/Contacts/ContactNew";
import User from "../../screens/User";
import Color from "../../utility/Color";
import { isIOS } from "../../utility";
import { People, Person, Add, Menu } from "../Icons";

const Stack = createNativeStackNavigator();
const Tab = isIOS()
  ? createBottomTabNavigator()
  : createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const iconSize = 25;
const iconColor = Color.steelBlue;

const StackHeader = ({ navigation: navigation }: any) => {
  if (isIOS()) return null;
  return (
    <Menu
      color={iconColor}
      size={iconSize}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const ContactStacks = ({ navigation: navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactList}
        options={{
          headerLeft: () => <StackHeader navigation={navigation} />,
          headerTintColor: Color.steelBlue,
        }}
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

const AddContactStacks = ({ navigation: navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Contact"
        component={ContactNew}
        options={{
          headerLeft: () => <StackHeader navigation={navigation} />,
          headerTintColor: Color.steelBlue,
        }}
      />
    </Stack.Navigator>
  );
};

const MeStacks = ({ navigation: navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Me"
        component={User}
        options={{
          headerLeft: () => <StackHeader navigation={navigation} />,
          headerTintColor: Color.steelBlue,
        }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  const iconTabColor = Color.lightSteelBlue;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        component={ContactStacks}
        options={{
          tabBarIcon: () => <People color={iconTabColor} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name="Add Contact"
        component={AddContactStacks}
        options={{
          tabBarIcon: () => <Add color={iconTabColor} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeStacks}
        options={{
          tabBarIcon: () => <Person color={iconTabColor} size={iconSize} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawers = ({ navigation: navigation }: any) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contacts" component={ContactStacks} />
      <Drawer.Screen name="Add Contact" component={AddContactStacks} />
      <Drawer.Screen name="Me" component={MeStacks} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  if (isIOS()) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  );
};

export default Routes;
