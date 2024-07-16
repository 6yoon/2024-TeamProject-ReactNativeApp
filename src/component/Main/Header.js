import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";

function Header({ date }) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthDay = `${month}월 ${day}일`;
  const API_KEY = `6cadfa791245062ee322a575a045bbec`;

  const [city, setCity] = useState("...");
  const [ok, setOk] = useState(true);
  const [temp, setTemp] = useState(273);
  const [weather, setWeather] = useState();
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(`${location[0].city} ${location[0].district}`);

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetch(URL)
   .then(res => res.json())
   .then(data => {
    setTemp(data.main.temp);
    setWeather(data.weather[0].main);
   });
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.today}>{monthDay}</Text>
      <View>
          <View  style={styles.weather}>
            <Text style={styles.weathertext}>{`${Math.floor(temp - 273)}º`}</Text>
            <Text style={styles.weathertext}>{weather}</Text>
          </View>
        <Text style={styles.city}>{city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 0.07,
    padding: 25,
  },
  today: {
    fontSize: 32,
    fontWeight: "bold",
  },
  weathertext: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
  weather: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default Header;
