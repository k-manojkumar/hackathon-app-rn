import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface, Modal, Portal, Divider, Provider } from "react-native-paper";
import { Overlay } from "react-native-elements";

import { PieChart, ProgressCircle } from "react-native-svg-charts";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Transactions1 from "../Current/Transactions1";
const data = [
  {
    key: 1,
    value: 1250,
    svg: { fill: "#145A32" },
  },
  {
    key: 2,
    value: 250,
    svg: { fill: "orange" },
    arc: { outerRadius: "130%", cornerRadius: 10 },
  },
];

class Cards extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => this.setState({ visible: true });

  hideModal = () => this.setState({ visible: false });
  render() {
    return (
      <React.Fragment>
        <View>
          <Text style={styles.localheaderText}>
            1234 1234 5678 5678 - Gold Card
          </Text>
          <Divider style={styles.divider} />
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={styles.localheaderText}>Available </Text>
              <Text style={styles.localheaderText}>£ 1250.00 </Text>
            </View>
            <PieChart
              style={{ flex: 1, height: 150 }}
              outerRadius={"70%"}
              innerRadius={10}
              data={data}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: 10,
              }}
            >
              <Text style={styles.localheaderText}>Out Standing </Text>
              <Text style={styles.localheaderText}>£ 250.00 </Text>
            </View>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 20,
              marginLeft: 13,
            }}
          >
            Last Transaction
          </Text>
          <MaterialCommunityIcons
            name="format-list-checkbox"
            size={20}
            color="white"
            style={{
              alignSelf: "flex-end",
              fontWeight: "bold",
            }}
            onPress={() => this.props.navigation.navigate("trans")}
          />

          <Overlay
            isVisible={this.state.visible}
            onBackdropPress={this.hideModal}
            fullScreen={true}
          >
            <Transactions1 />
          </Overlay>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 15,
              marginLeft: 13,
            }}
          >
            19/09 Sat
          </Text>
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 15,
              marginLeft: 13,
            }}
          >
            Tesco
          </Text>
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 15,
              marginLeft: 13,
              alignSelf: "flex-end",
            }}
          >
            £ 3.43
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            padding: 5,
          }}
        >
          <Text style={styles.quickActions}>Quick Actions</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="outline"
              raised={true}
              title="Block Card"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <FontAwesome
                  size={24}
                  color={"#D4AC0D"}
                  name="warning"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Outstanding"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={24}
                  color={"#D4AC0D"}
                  name="cash-multiple"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Pin Reset"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={24}
                  color={"#D4AC0D"}
                  name="lock-reset"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    backgroundColor: "#569F39",
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

export default Cards;
