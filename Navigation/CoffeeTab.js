import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import { Icon } from "native-base";
import React from "react";
const CoffeeTab = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail
  },
  {
    navigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome5" name="coffee" />,
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default CoffeeTab;
