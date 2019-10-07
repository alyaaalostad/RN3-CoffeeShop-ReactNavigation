import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CartIcon from "../CartIcon";
import CoffeeItem from "./CoffeeItem";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Text,
  Button,
  Icon,
  Title
} from "native-base";
// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

export default CoffeeList;
CoffeeList.navigationOptions = () => {
  return {
    title: "Coffee List",
    headLeft: null,
    headerRight: <CartIcon />
  };
};
