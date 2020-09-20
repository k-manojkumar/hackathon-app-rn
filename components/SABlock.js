import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

class SABlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex:
            !this.props.normalView && this.props.expandedModule === "savings"
              ? 6
              : 1,
          backgroundColor: "#7CB833",
        }}
      >
        <View
          style={{ flex: this.props.normalView ? 4 : 2, flexDirection: "row" }}
        >
          <View style={{ flex: 15 }}>
            <Text
              style={
                !this.props.normalView &&
                this.props.expandedModule === "savings"
                  ? this.props.styles.balanceText
                  : this.props.styles.headerText
              }
              onPress={() => this.props.navigation.navigate("SavingsAcc")}
            >
              Savings Accounts
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
            onPress={() => this.props.updateView("savings")}
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
              <Text style={this.props.styles.accountsText}>1 Account</Text>
              <Text style={this.props.styles.balanceText}>£ 5,612.06</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 5 }}
            >
              <Text style={this.props.styles.offerText}></Text>
            </View>
          </React.Fragment>
        )}
        {!this.props.normalView && this.props.expandedModule === "savings" && (
          <React.Fragment>
            <View>
              <Text>Expanded savings Account</Text>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

// ...

export default SABlock;
