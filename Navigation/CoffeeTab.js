import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeTab = createStackNavigator({
  ListScreen: CoffeeList,
  DetailScreen: CoffeeDetail
});
export default CoffeeTab;
