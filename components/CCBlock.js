import React from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-banner-carousel";
import Cards from "./cards/Cards";

class CCBlock extends React.Component {
  render() {
    return (
      <View
        style={{
          flex:
            !this.props.normalView && this.props.expandedModule === "card"
              ? 6
              : 1,
          backgroundColor: "#569F39",
        }}
      >
        <View
          style={{ flex: this.props.normalView ? 4 : 2, flexDirection: "row" }}
        >
          <View style={{ flex: 15 }}>
            <Text
              style={
                !this.props.normalView && this.props.expandedModule === "card"
                  ? this.props.styles.balanceText
                  : this.props.styles.headerText
              }
              onPress={() => this.props.navigation.navigate("Cards")}
            >
              Credit Cards
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
            onPress={() => this.props.updateView("card")}
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
              <Text style={this.props.styles.accountsText}>
                Available Limit
              </Text>
              <Text style={this.props.styles.balanceText}>£ 2,122.56</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 5 }}
            >
              <Text style={this.props.styles.offerText}>
                Payment Due in 6 Days
              </Text>
            </View>
          </React.Fragment>
        )}
        {!this.props.normalView && this.props.expandedModule === "card" && (
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
              <Cards {...this.props} />
            </Carousel>
          </View>
        )}
      </View>
    );
  }
}

const BannerWidth = Dimensions.get("window").width;

export default CCBlock;
