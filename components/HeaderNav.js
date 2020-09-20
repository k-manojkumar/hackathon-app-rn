import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class HeaderNav extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#F8F9F9",
          }}
        >
          <Image
            source={require("../static/Logo1.png")}
            style={{ width: 75, height: 50 }}
          ></Image>
        </View>
      </View>
    );
  }
}

// ...

export default HeaderNav;
