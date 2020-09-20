import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Searchbar } from "react-native-paper";
import Offers from "./Offers";
import CABlock from "./CABlock";
import SABlock from "./SABlock";
import CCBlock from "./CCBlock";
import LoanBlock from "./LoanBlock";
import MortBlock from "./MortBlock";

const data = [{ key: 1, module: <CABlock updateView={this.updateView} /> }];

class Home1 extends React.Component {
  state = {
    normalView: true,
    expandedModule: "none",
  };

  updateView = (module) => {
    this.setState({
      normalView: !this.state.normalView,
      expandedModule: module,
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 3, backgroundColor: "#024731" }} />
        {this.state.normalView && (
          <React.Fragment>
            <View style={{ height: 15 }}>
              <Searchbar placeholder="What can we help with you?" />
            </View>
            <View style={{ flex: 2 }}>
              <Offers />
            </View>
          </React.Fragment>
        )}
        <CABlock
          {...this.props}
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />
        <SABlock
          {...this.props}
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <CCBlock
          {...this.props}
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <LoanBlock
          {...this.props}
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <MortBlock
          {...this.props}
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />
      </View>
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
  headerText: {
    flex: 1,
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  accountsText: {
    flex: 1,
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },
  balanceText: {
    flex: 1,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  offerText: {
    color: "white",
    fontSize: 11,
    marginLeft: 10,
  },
  surface: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});

export default Home1;
