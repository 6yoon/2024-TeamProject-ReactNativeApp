import { View } from "react-native";
import Header from "./Header";

function Main() {
  const today = new Date();
  return (
    <View>
      <Header date={today}></Header>

    </View>
  );
}

export default Main;
