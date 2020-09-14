import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/LoginScreen/LoginScreen';
import OTP from '../screens/OtpScreen/OtpScreen';
import Welcome from '../screens/WelcomeScreen/WelcomeScreen';
import Dashboard from '../screens/DashboardScreen/DashboardScreen';

const homeNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    OTP: {screen: OTP},
    Welcome: {screen: Welcome},
    Dashboard: {screen: Dashboard},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default homeNavigator;
