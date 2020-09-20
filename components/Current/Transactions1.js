import * as React from "react";
import { DataTable, Divider } from "react-native-paper";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-banner-carousel";
import HeaderNav from "../HeaderNav";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 250;

class Transactions1 extends React.Component {
  render() {
    return (
      <View>
        <View style={{ height: 3, backgroundColor: "#024731" }} />
        <View>
          <Carousel
            index={0}
            pageSize={BannerWidth}
            showsPageIndicator={false}
            autoplay={false}
          >
            <Image
              style={{ width: BannerWidth, height: BannerHeight }}
              source={require("../../static/bar.png")}
            />
            <Image
              style={{ width: BannerWidth, height: BannerHeight }}
              source={require("../../static/pie.png")}
            />
          </Carousel>
        </View>
        <Divider style={styles.divider} />
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Place</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>19/09 Sat</DataTable.Cell>
              <DataTable.Cell>Tesco</DataTable.Cell>
              <DataTable.Cell numeric>£ 3.43</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>17/09 Sat</DataTable.Cell>
              <DataTable.Cell>Asda</DataTable.Cell>
              <DataTable.Cell numeric>£ 5.43</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>17/09 Sat</DataTable.Cell>
              <DataTable.Cell>StageCoach</DataTable.Cell>
              <DataTable.Cell numeric>£ 4.80</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>19/09 Sat</DataTable.Cell>
              <DataTable.Cell>Tesco</DataTable.Cell>
              <DataTable.Cell numeric>£ 3.43</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>17/09 Sat</DataTable.Cell>
              <DataTable.Cell>Asda</DataTable.Cell>
              <DataTable.Cell numeric>£ 5.43</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>17/09 Sat</DataTable.Cell>
              <DataTable.Cell>StageCoach</DataTable.Cell>
              <DataTable.Cell numeric>£ 4.80</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>19/09 Sat</DataTable.Cell>
              <DataTable.Cell>Tesco</DataTable.Cell>
              <DataTable.Cell numeric>£ 3.43</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>17/09 Sat</DataTable.Cell>
              <DataTable.Cell>Asda</DataTable.Cell>
              <DataTable.Cell numeric>£ 5.43</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "grey",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Transactions1;
