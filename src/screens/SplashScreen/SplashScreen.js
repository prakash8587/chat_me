import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {styles} from './SplashScreenStyle';

class SplashScreen extends Component {
  componentDidMount = () => {
    this.navigateToLogin();
  };

  navigateToLogin = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={require('../../assets/splash_logo.png')} />
      </View>
    );
  }
}

export default SplashScreen;
