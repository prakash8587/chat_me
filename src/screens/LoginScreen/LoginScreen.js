import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {styles} from './LoginScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginHeader from '../../component/LoginHeader/LoginHeader';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {mobileNumber: ''};
  }

  updateMobileNumber = (text) => {
    this.setState({mobileNumber: text}, () => {
      if (this.state.mobileNumber.length === 10) this.navigateToOtp();
    });
  };

  validateMobileNumber() {
    if (this.state.mobileNumber.length === 10) this.navigateToOtp();
    else {
      // Alert.alert('Please enter a valid mobile number');
      Snackbar.show({
        text: 'Please enter a valid mobile number.',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }

  navigateToOtp() {
    // this.props.saveMobileNumber(this.state.mobileNumber);
    this.props.navigation.navigate('OTP', {
      mobileNumber: this.state.mobileNumber,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <StatusBar backgroundColor="#0065ff" /> */}
        {/* <LoginHeader /> */}
        <View
          style={{
            flex: 1,
            // backgroundColor: '#005800',
            alignItems: 'center',
          }}>
          <View style={{height: '20%'}} />
          <Image source={require('../../assets/chat_me.jpg')} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              marginTop: 40,
            }}>
            <TextInput
              style={{
                height: 50,
                width: '90%',
                backgroundColor: '#d3d3d3',
                fontSize: 18,
                borderRadius: 4,
                paddingLeft: 10,
                borderColor: '#FFF',
                borderWidth: 1.2,
                color: '#000',
              }}
              maxLength={10}
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              placeholderTextColor="#fff"
              // onChangeText={(text) => this.updateMobileNumber(text)}
              onChangeText={this.updateMobileNumber} // auto-bind
            />
            <TouchableOpacity
              onPress={() => {
                this.validateMobileNumber();
              }}
              style={{
                // flex: 1,
                position: 'absolute',
                right: 5,
                backgroundColor: '#fff',
                height: 40,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Icon name="long-arrow-right" size={25} color="#939393" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
