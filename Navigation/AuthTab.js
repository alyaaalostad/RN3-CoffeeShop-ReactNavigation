import { createStackNavigator } from "react-navigation-stack";
import Profile from "../Components/Profile";
import Login from "../Components/Login";
const AuthTab = createStackNavigator(
  {
    LoginScreen: Login,
    ProfileScreen: Profile
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

export default AuthTab;
