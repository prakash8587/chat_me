import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './LoginHeaderStyle';

class LoginHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: '#288028',
          justifyContent: 'center',
        }}>
        <Text>Login Header</Text>
      </View>
    );
  }
}

export default LoginHeader;
