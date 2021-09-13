import React from "react";
import { TouchableOpacity } from "react-native";
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
import { Contact, Person, Add, Menu } from "../Icons";

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
    <TouchableOpacity>
      <Menu
        color={iconColor}
        size={iconSize}
        onPress={() => navigation.openDrawer()}
      />
    </TouchableOpacity>
  );
};

const ContactStacks = ({ navigation: navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactsStack"
        component={ContactList}
        options={{
          title: "Contacts",
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
        name="AddContactStack"
        component={ContactNew}
        options={{
          title: "Add Contact",
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
        name="MeStack"
        component={User}
        options={{
          title: "Me",
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
          headerShown: false,
          tabBarIcon: () => <Contact color={iconTabColor} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name="AddContact"
        component={AddContactStacks}
        options={{
          title: "Add Contact",
          headerShown: false,
          tabBarIcon: () => <Add color={iconTabColor} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeStacks}
        options={{
          headerShown: false,
          tabBarIcon: () => <Person color={iconTabColor} size={iconSize} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawers = ({ navigation: navigation }: any) => {
  const iconDrawerColor = Color.steelBlue;
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Color.lightSteelBlue,
        activeBackgroundColor: Color.aliceBlue,
        inactiveTintColor: Color.steelBlue,
        labelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="Contacts"
        component={ContactStacks}
        options={{
          drawerIcon: () => <Contact color={iconDrawerColor} size={iconSize} />,
        }}
      />
      <Drawer.Screen
        name="Add Contact"
        component={AddContactStacks}
        options={{
          drawerIcon: () => <Add color={iconDrawerColor} size={iconSize} />,
        }}
      />
      <Drawer.Screen
        name="Me"
        component={MeStacks}
        options={{
          drawerIcon: () => <Person color={iconDrawerColor} size={iconSize} />,
        }}
      />
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
