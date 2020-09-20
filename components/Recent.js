import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Divider, Button, Card, Title, Paragraph } from "react-native-paper";

class Recent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#D4EFDF" }}>
        <ScrollView>
          <Divider style={styles.divider} />
          <Card style={styles.card}>
            <Card.Title title="Payment" subtitle="Electric Bill" />
            <Card.Content>
              <Paragraph>Aug 20 - £ 70.00</Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button>Repeat</Button>
            </Card.Actions>
          </Card>
          <Divider style={styles.divider} />
          <Card style={styles.card}>
            <Card.Title title="Transfer" subtitle="Mr. Abc Efg" />
            <Card.Content>
              <Paragraph>Monthly expenses</Paragraph>
              <Paragraph>Aug 20 - £ 50.00</Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button>Repeat</Button>
            </Card.Actions>
          </Card>
          <Divider style={styles.divider} />
          <Card style={styles.card}>
            <Card.Title title="Transfer" subtitle="Mr. Qwe ASD" />
            <Card.Content>
              <Paragraph>Trip expenses</Paragraph>
              <Paragraph>Aug 20 - £ 250.00</Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button>Repeat</Button>
            </Card.Actions>
          </Card>
          <Divider style={styles.divider} />
          <Card style={styles.card}>
            <Card.Title title="Transfer" subtitle="Mr. Qwe ASD" />
            <Card.Content>
              <Paragraph>Trip expenses</Paragraph>
              <Paragraph>Aug 20 - £ 250.00</Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button>Repeat</Button>
            </Card.Actions>
          </Card>
          <Divider style={styles.divider} />
          <Card style={styles.card}>
            <Card.Title title="Transfer" subtitle="Mr. Qwe ASD" />
            <Card.Content>
              <Paragraph>Trip expenses</Paragraph>
              <Paragraph>Aug 20 - £ 250.00</Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button>Repeat</Button>
            </Card.Actions>
          </Card>
          <Divider style={styles.divider} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "white",
    height: 1,
    marginTop: 3,
    marginBottom: 3,
  },
  card: {
    marginRight: 7,
    marginLeft: 7,
    borderWidth: 1,
    borderColor: "green",
  },
});

export default Recent;
