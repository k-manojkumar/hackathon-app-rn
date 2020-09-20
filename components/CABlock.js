import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Carousel from "react-native-banner-carousel";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Current1 from "./Current/Current1";
import Current2 from "./Current/Current2";

class CABlock extends React.Component {
  render() {
    return (
      <View
        style={{
          flex:
            !this.props.normalView && this.props.expandedModule === "current"
              ? 6
              : 1,
          justifyContent: "center",
          backgroundColor: "#A3D12D",
        }}
      >
        <View
          style={{
            flex: this.props.normalView ? 4 : 2,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 15 }}>
            <Text
              style={
                !this.props.normalView &&
                this.props.expandedModule === "current"
                  ? this.props.styles.balanceText
                  : this.props.styles.headerText
              }
              onPress={() => this.props.navigation.navigate("CurrentAcc")}
            >
              Current Accounts
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
            onPress={() => this.props.updateView("current")}
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
              <Text style={this.props.styles.accountsText}>2 Accounts</Text>
              <Text style={this.props.styles.balanceText}>£ 3,012.56</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 5 }}
            >
              <Text style={this.props.styles.offerText}>
                Overdraft Offers Available for Premium Current Account
              </Text>
            </View>
          </React.Fragment>
        )}
        {!this.props.normalView && this.props.expandedModule === "current" && (
          <View
            style={{
              flex: 20,
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Carousel
              index={0}
              pageSize={BannerWidth}
              showsPageIndicator={false}
              autoplay={false}
            >
              <Current1 {...this.props} />
              <Current2 {...this.props} />
            </Carousel>
          </View>
        )}
      </View>
    );
  }
}

const BannerWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    backgroundColor: "#A3D12D",
  },
  localheaderText: {
    color: "white",
    fontSize: 17,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  quickActions: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "grey",
  },
  buttonTitle: {
    color: "white",
  },
  divider: {
    backgroundColor: "white",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default CABlock;
