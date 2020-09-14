import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './OtpScreenStyle';

class OtpScreen extends Component {
  navigateToWelcome() {
    this.props.navigation.navigate('Welcome');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.emptyContainer} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.optInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.optInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.optInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.optInput}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {
            this.navigateToWelcome();
          }}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OtpScreen;
