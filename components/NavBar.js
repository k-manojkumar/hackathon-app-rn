import * as React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Home from "./Home";
import Home1 from "./Home1";
import CurrentAcc from "./CurrentAccHome";
import HeaderNav from "./HeaderNav";
import SavingsAcc from "./SavingsAccHome";
import Cards from "./CardsHome";
import Loans from "./LoansHome";
import Mortgage from "./MortgageHome";
import Example from "./Example";
import Profile from "./Profile";
import Recent from "./Recent";
import Favorites from "./Favorites";
import Transactions1 from "./Current/Transactions1";

const Stack = createStackNavigator();

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "profile", title: "Profile", icon: "face-profile" },
    {
      key: "fav",
      title: "Favorites",
      icon: "heart-circle",
    },
    { key: "recents", title: "Recents", icon: "history" },
    { key: "more", title: "More", icon: "menu" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#F2F3F4" }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home1}
              options={{ headerTitle: (props) => <HeaderNav {...props} /> }}
            />
            <Stack.Screen
              name="CurrentAcc"
              component={CurrentAcc}
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
            <Stack.Screen
              name="trans"
              component={Transactions1}
              options={{ title: "Transactions" }}
            />
          </Stack.Navigator>
          <View style={{ height: 2, backgroundColor: "#BDC3C7" }} />
        </View>
      </NavigationContainer>
    ),
    profile: () => (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#F2F3F4" }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerTitle: (props) => <HeaderNav {...props} /> }}
            />
          </Stack.Navigator>
          <View style={{ height: 2, backgroundColor: "#BDC3C7" }} />
        </View>
      </NavigationContainer>
    ),
    fav: () => (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#F2F3F4" }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Profile"
              component={Favorites}
              options={{ headerTitle: (props) => <HeaderNav {...props} /> }}
            />
          </Stack.Navigator>
          <View style={{ height: 2, backgroundColor: "#BDC3C7" }} />
        </View>
      </NavigationContainer>
    ),
    recents: () => (
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#F2F3F4" }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Recent"
              component={Recent}
              options={{ headerTitle: (props) => <HeaderNav {...props} /> }}
            />
          </Stack.Navigator>
          <View style={{ height: 2, backgroundColor: "#BDC3C7" }} />
        </View>
      </NavigationContainer>
    ),
    more: () => <Text>More options</Text>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "white" }}
      activeColor={"#024731"}
    />
  );
};

export default NavBar;
