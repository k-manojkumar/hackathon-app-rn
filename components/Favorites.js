import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, Button, Card, Chip, Paragraph } from "react-native-paper";

class Favorites extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#D4EFDF" }}>
        <Divider style={styles.divider} />
        <Card style={styles.card}>
          <Card.Title title="Offer" subtitle="Overdraft for Premium Account" />
          <Card.Content>
            <Paragraph>
              Get £ 2,000.00 Overdraft Limit for your Premium Current Account
            </Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button>Apply</Button>
          </Card.Actions>
        </Card>
        <Divider style={styles.divider} />
        <Card style={styles.card}>
          <Card.Title title="Offer" subtitle="Upgrade Credit Card" />
          <Card.Content>
            <Paragraph>
              Updade to Platinum Card with £ 5,000.00 Limit with 21.9% APR
            </Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button>Apply</Button>
          </Card.Actions>
        </Card>
        <Divider style={styles.divider} />
        <Card style={styles.card}>
          <Card.Title title="Frequently Used" />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Quick Balance Current Accounts
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Bill Pay
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Transactions - Premium Account
            </Chip>

            <Chip icon="tag-heart-outline" style={styles.chip}>
              Transactions - Gold Card
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Statements
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Standing Orders
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Pin Change
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Cheque Request
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Mortgage Payment
            </Chip>
            <Chip icon="tag-heart-outline" style={styles.chip}>
              Loan Payment Holiday
            </Chip>
          </View>
          <Divider style={styles.divider} />
        </Card>
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
  chip: {
    margin: 3,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "green",
  },
});

export default Favorites;
