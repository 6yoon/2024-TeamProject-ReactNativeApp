import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";

const App = () => {
  const today = new Date();
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      Pretendard: require("../assets/fonts/Pretendard-Thin.ttf"),
      Pretendard2: require("../assets/fonts/Pretendard-ExtraLight.ttf"),
      Pretendard3: require("../assets/fonts/Pretendard-Light.ttf"),
      Pretendard4: require("../assets/fonts/Pretendard-Regular.ttf"),
      Pretendard5: require("../assets/fonts/Pretendard-Medium.ttf"),
      Pretendard6: require("../assets/fonts/Pretendard-SemiBold.ttf"),
      Pretendard7: require("../assets/fonts/Pretendard-Bold.ttf"),
      Pretendard8: require("../assets/fonts/Pretendard-ExtraBold.ttf"),
      Pretendard9: require("../assets/fonts/Pretendard-Black.ttf"),
    });
    setIsReady(true);
  }, []);

  return (
    <SafeAreaProvider>
      {isReady && (
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <Header date={today} />
          </View>
          <Footer /> 
        </SafeAreaView>
      )}
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
