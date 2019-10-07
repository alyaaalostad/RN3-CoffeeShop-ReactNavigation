import { createBottomTabNavigator } from "react-navigation-tabs";

import CoffeeTab from "./CoffeeTab";
import AuthTab from "./AuthTab";
import OrdersTab from "./OrdersTab";

const BottomTab = createBottomTabNavigator({
  CoffeeTab: CoffeeTab,
  OrdersTab: OrdersTab,
  AuthTab: AuthTab
});

export default BottomTab;
