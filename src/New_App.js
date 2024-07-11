import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./component/Footer";
import Main from "./component/Main";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";

const App = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <Main></Main>
          </View>
          <Footer /> 
        </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
  },
});

export default App;
