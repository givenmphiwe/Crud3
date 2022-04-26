import firebase from "../firebase/fire";
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { Place: "" };
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("Results/")
      .on("value", (snapshot) => {
        var li = [];
        snapshot.forEach((child) => {
          li.push({
            key: child.key,
            Name: child.val().BetName,
            Contact: child.val().Contact,
            Description: child.val().Description,
          });
        });
        this.setState({ list: li });
      });
  }

  //for the coordinates

  itemSeparator = () => {
    return (
      <View
        style={{
          //height: .5,
          //width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  render() {
    const user = firebase.auth().currentUser;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Welcome</Text>

          <TouchableOpacity onPress={async () => {
                      navigation.navigate("AddScreen") }}>
          <Text style={{fontWeight: "bold",fontSize: 19}}>
            Add Information
          </Text>
          </TouchableOpacity>


          <View style={styles.inputView}></View>
        </View>

        <View // the flatlist for the react native that will fetch data from react
          style={{
            flex: 1,
            alignSelf: "center",
            justifyConten: "center",
            marginTop: 20,
          }}
        >
          <FlatList
            style={{ width: "100%" }}
            data={this.state.list}
            keyExtractor={(item) => item.key}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={styles.info}>
                    <View style={{}}>
                    <TouchableOpacity onPress={async () => {navigation.navigate("UpdateScreen",{Name: item.Name})}}>
                      <View
                        style={{
                          marginLeft: 24,
                          marginTop: 14,
                          flexDirection: "row",
                          backgroundColor: "#fff",
                        }}
                      >
                        <AntDesign
                          name="smile-circle"
                          size={23}
                          color="green"
                        />
                        <Text style={{ marginLeft: 2 }}>Winning number:</Text>
                        <Text style={{ marginLeft: 10, marginTop: 0 }}>
                          {item.Name}
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: 35,
                          borderStyle: "dotted",
                          height: 50,
                          borderLeftWidth: 1,
                        }}
                      >
                        <Text style={{ marginLeft: 20, marginTop: 15 }}>
                          {item.Contact}
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: 24,
                          flexDirection: "row",
                          marginTop: 5,
                        }}
                      >
                        <Entypo name="time-slot" size={24} color="black" />

                        <Text style={{ marginLeft: 20, marginTop: 0 }}>
                          {item.Description}
                        </Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  info: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 30,
    width: 280,
    height: 140,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#B9CAE3",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 12.0,

    elevation: 1,
  },
  Pass: {
    marginTop: 6,
    marginLeft: 10,
  },
  me: {
    marginLeft: 7,
  },
  Heading: {
    marginTop: 30,
  },
  HeadingText: {
    marginLeft: 0,
    fontSize: 25,
    color: "black",
    marginTop: 0,
    fontWeight: "bold",
  },
  cardImage: {
    marginRight: 145,
    height: 135,
    width: 150,
  },
  cardText: {
    marginRight: 0,
    fontSize: 35,
    color: "#fff",
    justifyContent: "flex-start",
    alignSelf: "center",
    marginTop: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 30,
    width: 80,
    height: 50,
    marginTop: 15,
    marginLeft: 5,
    borderWidth: 4,
    borderColor: "#B9CAE3",
    shadowOffset: {
      width: 12,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,

    elevation: 4,
  },

  inputView: {
    position: "absolute",
    marginTop: 40,
    marginLeft: 15,
    flexDirection: "row",
  },
  Send: {
    backgroundColor: "#fff",
    marginLeft: 10,
    marginTop: 10,
    width: 60,
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
    borderColor: "#B9CAE3",
    paddingBottom: 5,
    shadowOffset: {
      width: 15,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,

    elevation: 4,
  },
  DoneText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  DoneText1: {
    marginTop: 15,
    marginLeft: 45,
    fontSize: 18,
    fontWeight: "bold",
    color: "#B9CAE3",
  },

  Topic: {
    marginTop: 10,
  },
  Box: {
    marginLeft: 0,
    right: 1,
    marginTop: 0,
    width: 30,
    height: 30,
  },
});
