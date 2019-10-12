import { createStackNavigator } from "react-navigation-stack";

import OrderHistory from "../Components/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";
import { Icon } from "native-base";
import React from "react";
const OrdersTab = createStackNavigator(
  {
    CartScreen: CoffeeCart,
    OrderScreen: OrderHistory
  },
  {
    navigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome5" name="shopping-cart" />,
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default OrdersTab;
