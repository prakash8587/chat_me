import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {styles} from './WelcomeScreenStyle';
import Contacts, {getAll} from 'react-native-contacts';

class WelcomeScreen extends Component {
  navigateToDashboard = () => {
    this.getAllContactList();
    this.props.navigation.navigate('Dashboard');
  };

  getAllContactList = () => {
    console.log('Get All Conatct');
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  };

  loadContacts() {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.log('Permission to access contacts was denied');
      } else {
        console.log('----------> ' + contacts);
      }
    });

    // Contacts.getCount(count => {
    //   this.setState({ searchPlaceholder: `Search ${count} contacts` });
    // });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={require('../../assets/chat_me.jpg')} />
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {
            this.navigateToDashboard();
          }}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
