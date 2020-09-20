import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class MortBlock extends React.Component {
  render() {
    return (
      <View
        style={{
          flex:
            !this.props.normalView && this.props.expandedModule === "mort"
              ? 6
              : 1,
          backgroundColor: "#086D44",
        }}
      >
        <View
          style={{ flex: this.props.normalView ? 4 : 2, flexDirection: "row" }}
        >
          <View style={{ flex: 15 }}>
            <Text
              style={
                !this.props.normalView && this.props.expandedModule === "mort"
                  ? this.props.styles.balanceText
                  : this.props.styles.headerText
              }
              onPress={() => this.props.navigation.navigate("Mortgage")}
            >
              Mortgage
            </Text>
          </View>
          <MaterialCommunityIcons
            name="dots-vertical-circle"
            size={20}
            color="white"
            style={{
              flex: 1,
              alignSelf: "center",
              fontWeight: "bold",
            }}
            onPress={() => this.props.updateView("mort")}
          />
        </View>
        {this.props.normalView && (
          <React.Fragment>
            <View
              style={{
                flex: 6,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text style={this.props.styles.accountsText}>Balance</Text>
              <Text style={this.props.styles.balanceText}>£ 234,122.56</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 5 }}
            >
              <Text style={this.props.styles.offerText}>
                Payment Due in 18 Days
              </Text>
            </View>
          </React.Fragment>
        )}
        {!this.props.normalView && this.props.expandedModule === "mort" && (
          <React.Fragment>
            <View>
              <Text>Mortgage expanded</Text>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

// ...

export default MortBlock;
