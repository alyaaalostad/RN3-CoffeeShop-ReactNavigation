import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)."
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
