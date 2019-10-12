import { createStackNavigator } from "react-navigation-stack";
import Profile from "../Components/Profile";
import Login from "../Components/Login";
import { Icon } from "native-base";
import React from "react";
const AuthTab = createStackNavigator(
  {
    LoginScreen: Login,
    ProfileScreen: Profile
  },
  {
    initialRouteName: "LoginScreen",
    navigationOptions: {
      tabBarIcon: () => <Icon type="FontAwesome" name="user" />,
      activeTintColor: "#b8cdd0",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default AuthTab;
