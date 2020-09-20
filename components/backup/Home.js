import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Offers from "./Offers";
import CABlock from "./CABlock";
import SABlock from "./SABlock";
import CCBlock from "./CCBlock";
import LoanBlock from "./LoanBlock";
import MortBlock from "./MortBlock";

const data = [{ key: 1, module: <CABlock updateView={this.updateView} /> }];

class Home extends React.Component {
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
          <View style={{ flex: 2 }}>
            <Offers />
          </View>
        )}
        <CABlock
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />
        <SABlock
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <CCBlock
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <LoanBlock
          updateView={this.updateView}
          normalView={this.state.normalView}
          expandedModule={this.state.expandedModule}
          styles={styles}
        />

        <MortBlock
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
    color: "white",
    fontSize: 25,
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
    fontSize: 15,
  },
  offerText: {
    color: "white",
    fontSize: 11,
    marginLeft: 10,
  },
});

export default Home;
