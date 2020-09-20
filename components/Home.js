import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Searchbar } from "react-native-paper";

import Offers from "./Offers";
import CABlock from "./CABlock";
import SABlock from "./SABlock";
import CCBlock from "./CCBlock";
import LoanBlock from "./LoanBlock";
import MortBlock from "./MortBlock";

const initData = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 3,
  },
  {
    key: 4,
  },
  {
    key: 5,
  },
];
const bcColors = ["#A3D12D", "#7CB833", "#569F39", "#2F863E", "#086D44"];

class Home extends React.Component {
  state = {
    normalView: true,
    expandedModule: "none",
    data: initData,
  };

  updateView = (module) => {
    this.setState({
      normalView: !this.state.normalView,
      expandedModule: module,
    });
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <React.Fragment>
        <TouchableOpacity onLongPress={drag}>
          {item.key === 1 && (
            <CABlock
              {...this.props}
              bcColor={bcColors[index]}
              updateView={this.updateView}
              normalView={this.state.normalView}
              expandedModule={this.state.expandedModule}
              styles={styles}
            />
          )}
          {item.key === 2 && (
            <SABlock
              {...this.props}
              updateView={this.updateView}
              normalView={this.state.normalView}
              expandedModule={this.state.expandedModule}
              styles={styles}
            />
          )}
          {item.key === 3 && (
            <CCBlock
              {...this.props}
              updateView={this.updateView}
              normalView={this.state.normalView}
              expandedModule={this.state.expandedModule}
              styles={styles}
            />
          )}
          {item.key === 4 && (
            <LoanBlock
              {...this.props}
              updateView={this.updateView}
              normalView={this.state.normalView}
              expandedModule={this.state.expandedModule}
              styles={styles}
            />
          )}
          {item.key === 5 && (
            <MortBlock
              {...this.props}
              updateView={this.updateView}
              normalView={this.state.normalView}
              expandedModule={this.state.expandedModule}
              styles={styles}
            />
          )}
        </TouchableOpacity>
      </React.Fragment>
    );
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
        <View style={{ flex: 3 }}>
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            onDragEnd={({ data }) => this.setState({ data })}
          />
        </View>
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
    fontSize: 20,
    marginLeft: 10,
    justifyContent: "flex-start",
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
  },
  offerText: {
    color: "white",
    fontSize: 11,
    marginLeft: 10,
  },
});

export default Home;
