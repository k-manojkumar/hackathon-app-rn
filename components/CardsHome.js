import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart, ProgressCircle } from "react-native-svg-charts";
const data = [
  {
    key: 1,
    value: 1250,
    svg: { fill: "green" },
  },
  {
    key: 2,
    value: 250,
    svg: { fill: "orange" },
    arc: { outerRadius: "130%", cornerRadius: 10 },
  },
];

class CardsHome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Credit Cards Home Screen</Text>
        <ProgressCircle
          style={{ height: 200 }}
          progress={0.7}
          progressColor={"rgb(134, 65, 244)"}
          startAngle={-Math.PI * 0.8}
          endAngle={Math.PI * 0.8}
        />
        <PieChart
          style={{ height: 100 }}
          outerRadius={"70%"}
          innerRadius={10}
          data={data}
        />
      </View>
    );
  }
}

// ...

export default CardsHome;
