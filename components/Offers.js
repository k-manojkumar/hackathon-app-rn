import React from "react";
import Carousel from "react-native-banner-carousel";
import { StyleSheet, Image, View, Dimensions, YellowBox } from "react-native";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 200;

const images = [
  require("../static/creditcards.png"),
  require("../static/Loan.jpg"),
  require("../static/mortgage.jpg"),
];

YellowBox.ignoreWarnings(["Animated: `useNativeDriver` was not specified."]);

class Offers extends React.Component {
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={image}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
        >
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Offers;
