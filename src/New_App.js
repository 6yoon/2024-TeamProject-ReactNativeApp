import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Calendar from "./component/Calendar/Calendar";
import Diary from "./component/Diary/Diary";
import Main from "./component/Main/Main";
import MyPage from "./component/MyPage/MyPage";
import Edit from "./component/MyPage/Edit";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 45 + insets.bottom,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="home" color="#6E3BFF" size={32}></Icon>
            ) : (
              <Icon name="home" color="#aaa" size={32}></Icon>
            ),
        }}
        name="Main"
        component={Main}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="calendar" color="#6E3BFF" size={32}></Icon>
            ) : (
              <Icon name="calendar" color="#aaa" size={32}></Icon>
            ),
        }}
        name="Calendar"
        component={Calendar}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="book" color="#6E3BFF" size={32}></Icon>
            ) : (
              <Icon name="book" color="#aaa" size={32}></Icon>
            ),
        }}
        name="Diary"
        component={Diary}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="user" color="#6E3BFF" size={32}></Icon>
            ) : (
              <Icon name="user" color="#aaa" size={32}></Icon>
            ),
        }}
        name="MyPage"
        component={MyPage}
      />
    </Tab.Navigator>
  );
};

export default App = () => {

  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="MyPage">
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
