import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon1 from 'react-native-vector-icons/FontAwesome';
import Vcolor from '../global';

const DrawerList = [
  { icon: 'server', label: 'Home', navigateTo: 'Home' },
  { icon: 'card-account-details', label: 'Profile', navigateTo: 'Profile' },
  { icon: 'bell-badge', label: 'Notification', navigateTo: 'Notification' },
  { icon: 'ballot', label: 'Details', navigateTo: 'Details' },
  { icon: 'cloud-download', label: 'Download', navigateTo: 'Download' }, ]

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color= 'white' size={size} />}
      label={label}
      onPress={() => navigation.navigate(navigateTo)}
      labelStyle={{ color: 'white', fontSize: 18 }}
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((item, index) => (
    <DrawerLayout
      key={index}
      icon={item.icon}
      label={item.label}
      navigateTo={item.navigateTo}
    />
  ));
};

function DrawerContent(props) {
  const { onLogout } = props;
  // const navigation = useNavigation();
  const handleSignOut = () => {
    // Display an Alert dialog with a confirmation request
    Alert.alert(
      'Confirmation', // Title of the alert
      'Do you want to log out?', // Message of the alert
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Perform any additional cleanup you might need here
            onLogout(); // Trigger the logout function if user presses 'Yes'
          },
        },
      ],
      { cancelable: false } // Prevents tapping outside of the alert from closing it
    );
  };

  const userprofile ={
    name: 'shubham kumar',
    email:'shubham@gmail.com',
    role:'admin'
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drowertogelcloseangle}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
        >
          <FontAwesomeIcon1 name="angle-left" size={40} color="white" solid />
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <FontAwesomeIcon name="user-astronaut" size={60} color="white" solid />
              <View style={{ marginLeft: 5 }}>
                <Title style={styles.title}>{userprofile.name}</Title>
                <Text style={styles.caption} numberOfLines={1}>
                  {userprofile.email}
                </Text>
                <Text style={styles.title}>Role: {userprofile.role}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems /> 
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color='white' size={size} />
          )}
          label="Sign Out"
          onPress={handleSignOut}
          labelStyle={{ color: 'white', fontSize: 18 }}
        />
      </View>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drowertogelcloseangle:{
    marginTop:40,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginRight:40,
    // marginLeft:10,
  },
  drawerContent: {
    flex: 1,
    borderTopEndRadius: 50,
    marginTop: 10,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    width: '100%',
    color:'white'
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
});
