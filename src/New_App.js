import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CalendarView from "./component/Calendar/CalendarView";
import Diary from "./component/Diary/Diary";
import AddDiary from "./component/Diary/AddDiary";
import DiaryDetail from "./component/Diary/DiaryDetail";
import Main from "./component/Main/Main";
import MyPage from "./component/MyPage/MyPage";
import Edit from "./component/MyPage/Edit";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DiaryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Diaray"
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="diary" component={Diary} />
      <Stack.Screen name="addDiary" component={AddDiary} />
      <Stack.Screen name="diaryDetail" component={DiaryDetail} />
    </Stack.Navigator>
  );
}

function MyPageStack() {
  return (
    <Stack.Navigator
      initialRouteName="Mypage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="myPage" component={MyPage} />
      <Stack.Screen name="edit" component={Edit} />
    </Stack.Navigator>
  );
}

const MainTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const [addVisible, setAddVisible] = useState(false);

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
      >
        {() => <Main addVisible={addVisible} setAddVisible={setAddVisible} />}
      </Tab.Screen>
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
      >
        {() => (
          <CalendarView addVisible={addVisible} setAddVisible={setAddVisible} />
        )}
      </Tab.Screen>
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
        component={DiaryStack}
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
        component={MyPageStack}
      />
    </Tab.Navigator>
  );
};

export default App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
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
