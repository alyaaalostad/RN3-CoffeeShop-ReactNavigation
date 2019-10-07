import React, { Component } from "react";
import { observer } from "mobx-react";
import CartIcon from "../CartIcon";
// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

// Data
import cafes from "../../data/cafes";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    const cafeId = this.props.navigation.getParam("cafeID");
    const cafees = cafes.find(cafe => cafeId === cafe.id);
    if (!cafes) return <Content />;
    // const cafe = cafes[0];
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {cafees.name + "\n"}
                <Text note>{cafees.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: cafees.image }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button
            full
            danger
            onPress={() => this.props.navigation.navigate("CartScreen")}
          >
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(CoffeeDetail);
CoffeeDetail.navigationOptions = ({ navigation }) => {
  const cafeId = navigation.getParam("cafeID");
  const cafees = cafes.find(cafe => cafeId === cafe.id);
  return {
    title: cafees.name,
    headerRight: <CartIcon />
  };
};
