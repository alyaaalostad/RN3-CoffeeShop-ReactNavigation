import { createStackNavigator } from "react-navigation-stack";

import OrderHistory from "../Components/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";

const OrdersTab = createStackNavigator(
  {
    CartScreen: CoffeeCart,
    OrderScreen: OrderHistory
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100).",
        fontWeight: "bold"
      }
    }
  }
);

export default OrdersTab;
