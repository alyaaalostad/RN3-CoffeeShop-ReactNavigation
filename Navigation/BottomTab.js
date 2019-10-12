import { createBottomTabNavigator } from "react-navigation-tabs";

import CoffeeTab from "./CoffeeTab";
import AuthTab from "./AuthTab";
import OrdersTab from "./OrdersTab";

const BottomTab = createBottomTabNavigator(
  {
    CoffeeTab: CoffeeTab,
    OrdersTab: OrdersTab,
    AuthTab: AuthTab
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "rgb(20,90,100)"
      },
      activeBackgroundColor: "#b8cdd0",
      inactiveBackgroundColor: "white"
    }
  }
);

export default BottomTab;
