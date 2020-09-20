import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface, Card, Title, Paragraph, Divider } from "react-native-paper";
import { Overlay } from "react-native-elements";
import Icon from "@expo/vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Transactions1 from "./Transactions1";

class Current2 extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => this.setState({ visible: true });

  hideModal = () => this.setState({ visible: false });
  render() {
    return (
      <Surface style={styles.surface}>
        <View>
          <Text style={styles.localheaderText}>
            123456 12345679 - Basic Account
          </Text>
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
              Available Balance
            </Text>
            <Text
              style={{
                flex: 1,
                color: "white",
                fontSize: 20,
                marginLeft: 13,
                alignSelf: "flex-end",
              }}
            >
              £ 789.13
            </Text>
          </View>
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
                fontSize: 15,
                marginLeft: 13,
              }}
            >
              Balance
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
              £ 789.13
            </Text>
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
              title="Pay Bills"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={24}
                  color={"#D4AC0D"}
                  name="wallet"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Standing Order"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={20}
                  color={"#D4AC0D"}
                  name="timetable"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Cards"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={24}
                  color={"#D4AC0D"}
                  name="cards"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.quickActions}>Quick Transfers</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="outline"
              raised={true}
              title="Jane D"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={20}
                  color={"#D4AC0D"}
                  name="account-tie"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Jane Doe"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={20}
                  color={"#D4AC0D"}
                  name="account-tie"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
            <Button
              type="outline"
              raised={true}
              title="Doe J"
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              icon={
                <MaterialCommunityIcons
                  size={20}
                  color={"#D4AC0D"}
                  name="account-tie"
                  label={"asd"}
                  style={{ paddingRight: 10 }}
                />
              }
            />
          </View>
        </View>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    backgroundColor: "#A3D12D",
  },
  localheaderText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
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

export default Current2;
