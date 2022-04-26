import { NavigationRouteContext } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "../firebase/fire";

export default class UpdateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      Weight: "",
      Contact: "",
      Location: "",
    };
  }

  checkData = () => {
    const { Name } = this.state;
    const { Description } = this.state;
    const { Weight } = this.state;
    const { Contact } = this.state;
    const { Location } = this.state;
    //for the navigation
    const { navigation, route } = this.props;
    

    //thi auth is for getting the Driver user details they registered with
    const user = firebase.auth().currentUser;

    if (Name == user.displayName) {
      alert(
        "Please enter the name of the Receiver/the person you are sending the parcel to!"
      );
      return;
    }

    if (Contact == user.phoneNumber) {
      alert(
        "Please enter the phone Number of the Receiver/the person you are sending the parcel to!"
      );
      return;
    }

    if (
      Name == "" ||
      Description == "" ||
      Weight == "" ||
      Contact == "" ||
      Location == ""
    ) {
      Alert.alert("Please fill in all the fields");
    } else {
      
      firebase
        .database()
        .ref("Notifications/" + this.state.Name)
        .update({
          Name,
          Description,
          Weight,
          Contact,
          Location,
        })

        .then((data) => {
          console.log("data", data);
        })

        .catch((error) => {
          console.log("error", error);
        });
      navigation.navigate("Landing");
    }
  };

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Order Information </Text>

          <View style={styles.me}>
            <Text style={styles.Topic}>
              Easily send packages anywhere in south Africa{" "}
            </Text>
            <Text style={styles.Topic1}>send now with Hambisa</Text>
          </View>

          <View style={styles.inputView}>
            <View style={styles.input}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                maxLength={120}
                onChangeText={(Name) => this.setState({ Name })}
                style={styles.Pass}
                placeholder="Name of the Receiver"
              />
            </View>

            <View style={styles.input}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                maxLength={120}
                onChangeText={(Description) => this.setState({ Description })}
                style={styles.Pass}
                placeholder="Description"
              />
            </View>

            <View style={styles.input}>
              <TextInput
                style={styles.Pass}
                onChangeText={(Weight) => this.setState({ Weight })}
                placeholder="Weight in kg"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.input}>
              <TextInput
                style={styles.Pass}
                onChangeText={(Contact) => this.setState({ Contact })}
                placeholder="Number of the Receiver"
                keyboardType="numeric"
              />
            </View>

            <View>
              <TextInput
                placeholder="Location"
                onChangeText={(Location) => this.setState({ Location })}
                style={styles.Pass}
              />
            </View>

            <View style={styles.Send}>
              <TouchableOpacity onPress={this.checkData}>
                <Text style={styles.DoneText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 0,
  },
  Pass: {
    marginTop: 6,
    marginLeft: 10,
  },
  me: {
    marginLeft: 7,
  },
  Heading: {
    top: -180,
  },
  HeadingText: {
    marginLeft: 7,
    fontSize: 34,
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
  input: {
    backgroundColor: "#fff",
    textAlign: "left",
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 15,
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
  location: {
    backgroundColor: "#fff",
    textAlign: "left",
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 15,
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
    marginTop: 90,
    marginLeft: 40,
  },

  Send: {
    backgroundColor: "#fff",
    marginLeft: 140, //140
    marginTop: 20,
    width: 140,
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
    borderColor: "#B9CAE3",
    paddingBottom: 5,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,

    elevation: 4,
  },
  DoneText: {
    marginTop: 15,
    marginLeft: 45,
    fontSize: 18,
    fontWeight: "bold",
    color: "#B9CAE3",
  },
  Topic: {
    marginTop: 10,
  },
  textinput: {
    height: 40,
    marginVertical: 5,
    backgroundColor: "#eee",
  },
});
