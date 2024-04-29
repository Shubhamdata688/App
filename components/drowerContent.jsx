import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
  { icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile' },
  { icon: 'account-group', label: 'User', navigateTo: 'User' },
  { icon: 'bookshelf', label: 'Library', navigateTo: 'Library' }, // Assuming you have a 'Library' screen
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => navigation.navigate(navigateTo)}
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

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <Avatar.Image
                source={{
                  uri: 'https://www.example.com/avatar.png', // Use an appropriate avatar image URL
                }}
                size={50}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={styles.title}>Adarsh</Title>
                <Text style={styles.caption} numberOfLines={1}>
                  adarshthakur210@gmail.com
                </Text>
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
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    borderTopEndRadius: 50,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    width: '100%',
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
