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
import NavBar from "./components/NavBar";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return <NavBar />;
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
