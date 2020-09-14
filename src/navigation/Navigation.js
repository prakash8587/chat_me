import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/SplashScreen/SplashScreen';
import HomeNavigation from './HomeNavigation';

const AppNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    HomeNavigation: {screen: HomeNavigation},
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
