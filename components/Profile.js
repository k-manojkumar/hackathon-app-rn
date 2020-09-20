import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";

import { FontAwesome } from "@expo/vector-icons";

class Profile extends React.Component {
  render() {
    return (
      <View
        style={{ flex: 1, alignItems: "center", backgroundColor: "#D4EFDF" }}
      >
        <View style={{ paddingTop: 10 }}>
          <Avatar.Image size={200} source={require("../static/profile.png")} />
          <Text style={{ fontSize: 10, alignSelf: "center" }}>upload</Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Jane Doe</Text>
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingRight: 5 }}>
            Date of Birth
          </Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>01/01/1987</Text>
        </View>
        <View>
          <Divider style={styles.divider} />
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", paddingRight: 10 }}
          >
            Contact Numbers
          </Text>
          <FontAwesome
            name="edit"
            size={20}
            color="green"
            style={{ paddingTop: 5 }}
          />
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingRight: 5 }}>
            Mobile
          </Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>+44 1234 567890</Text>
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingRight: 5 }}>
            Work
          </Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>+44 207 123 4567</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 15 }}>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", paddingRight: 10 }}
          >
            Address
          </Text>
          <FontAwesome
            name="edit"
            size={20}
            color="green"
            style={{ paddingTop: 5 }}
          />
        </View>
        <View style={{ paddingTop: 5, flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingRight: 5 }}>
            Home
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>
              House No, Street Name
            </Text>
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>County</Text>
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>City</Text>
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>Post Code</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "green",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Profile;
