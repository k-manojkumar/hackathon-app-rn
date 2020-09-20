import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import BottomNavigation, {
  FullTab,
} from "react-native-material-bottom-navigation";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Home from "./components/Home";
import Home1 from "./components/Home1";
import CurrentAcc from "./components/CurrentAccHome";
import HeaderNav from "./components/HeaderNav";
import SavingsAcc from "./components/SavingsAccHome";
import Cards from "./components/CardsHome";
import Loans from "./components/LoansHome";
import Mortgage from "./components/MortgageHome";
import Example from "./components/Example";

const Stack = createStackNavigator();

export default class App extends React.Component {
  tabs = [
    {
      key: "Home",
      icon: "home-variant",
      label: "Home",
      barColor: "white",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "Apply",
      icon: "database",
      label: "Apply",
      barColor: "white",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "Pay",
      icon: "arrow-top-right-bottom-left-bold",
      label: "Pay & Transfer",
      barColor: "white",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "Help",
      icon: "help-circle",
      label: "Help",
      barColor: "white",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "Menu",
      icon: "menu",
      label: "More",
      barColor: "white",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
  ];

  state = {
    activeTab: "Home",
    help: true,
  };

  renderIcon = (icon) => ({ isActive }) => (
    <Icon size={24} color={isActive ? "#024731" : "#808B96"} name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      labelStyle={{ color: isActive ? "#024731" : "#808B96", fontSize: 11 }}
      renderIcon={this.renderIcon(tab.icon)}
      onPress={() => this.setState({ help: tab.key === "Help" })}
    />
  );
  render() {
    return (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#F2F3F4" }}>
          {/* <View
            style={{
              height: 50,
              backgroundColor: "#F8F9F9",
            }}
          >
            <Image
              source={require("./static/Logo.png")}
              style={{ width: 40, height: 40, marginLeft: 10, marginTop: 5 }}
            ></Image>
          </View>
          */}

          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home1}
              options={{ headerTitle: (props) => <HeaderNav {...props} /> }}
            />
            <Stack.Screen
              name="CurrentAcc"
              component={Example}
              options={{ title: "Current Accounts" }}
            />
            <Stack.Screen
              name="SavingsAcc"
              component={SavingsAcc}
              options={{ title: "Savings Accounts" }}
            />
            <Stack.Screen
              name="Cards"
              component={Cards}
              options={{ title: "Credit Cards" }}
            />
            <Stack.Screen
              name="Loans"
              component={Loans}
              options={{ title: "Loans" }}
            />
            <Stack.Screen
              name="Mortgage"
              component={Mortgage}
              options={{ title: "Mortgages" }}
            />
          </Stack.Navigator>
          <View style={{ height: 3, backgroundColor: "#BDC3C7" }} />
          <BottomNavigation
            activeTab={this.state.activeTab}
            onTabPress={(newTab) => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
