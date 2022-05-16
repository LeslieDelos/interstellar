import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import ScrollViewCommands from "react-native/Libraries/Components/ScrollView/ScrollViewCommands";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{
                uri: "https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png",
              }}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <View style={styles.film}>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Interstellar
            </Text>
            <Text
              style={{
                color: "lightgrey",
                fontSize: 10,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              2014 PG-13 2h49min Adventure,Drama,Sci-Fi
            </Text>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <View style={{ alignItems: "right" }}>
              <Text style={{ color: "white", fontSize: 8, marginLeft: 10 }}>
                A team of explorers travel through a{"\n"}wormhole in space in
                an attempt to{"\n"}ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                <Text style={{ color: "white" }}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: "green", height: 200 }}>
            <Text>Top Billed Cast</Text>
            <ScrollView horizontal={true} style={styles.horizontal}>
              <View
                style={{
                  border: ScrollViewCommands,
                  backgroundColor: "orange",
                  height: 300,
                  width: 150,
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("./assets/matthew.jpg")}
                  style={styles.cover}
                  resizeMode="contain"
                ></Image>
                <Text>Matthew McConaughey{"\n"}Cooper</Text>
              </View>
              <View
                style={{
                  border: ScrollViewCommands,
                  backgroundColor: "orange",
                  height: 300,
                  width: 150,
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("./assets/anne.jpg")}
                  style={styles.cover}
                  resizeMode="contain"
                ></Image>
                <Text>Anne Hathaway{"\n"}Brand</Text>
              </View>
              <View
                style={{
                  border: ScrollViewCommands,
                  backgroundColor: "orange",
                  height: 300,
                  width: 150,
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("./assets/jessica.jpg")}
                  style={styles.cover}
                  resizeMode="contain"
                ></Image>
                <Text>Jessica Chastain{"\n"}Murph</Text>
              </View>
              <View
                style={{
                  border: ScrollViewCommands,
                  backgroundColor: "orange",
                  height: 300,
                  width: 150,
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("./assets/mackenzie.jpg")}
                  style={styles.cover}
                  resizeMode="contain"
                ></Image>
                <Text>Mackenzie Foy{"\n"}Murphy</Text>
              </View>
            </ScrollView>
            <Text>Director{"\n"}Christopher Nolan</Text>
            <Text>
              Writers{"\n"}Jonathan Nolan (written by) and Christopher Nolan
              (written{"\n"}by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "grey",
    height: 60,
    marginBottom: 5,
  },
  img: {
    height: 60,
    width: 60,
    marginLeft: 20,
  },
  film: {
    height: 400,
    backgroundColor: "brown",
    marginBottom: 10,
  },
  cover: {
    height: 200,
    width: 150,
  },
  btn: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    width: 200,
    marginTop: 10,
    marginLeft: 10,
  },
  horizontal: {
    flex: 1,
  },
});
