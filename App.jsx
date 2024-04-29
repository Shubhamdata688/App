import React, { useState, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AssetExample from './components/AssetExample';
import DrawerContent from './components/drowerContent';
import LoginScreen from './components/login';
import RegistrationScreen from './components/registration';
import ResetPasswordScr from './components/forgetpassword';

// Create stack navigator for screens other than Login and Registration
const Stack = createNativeStackNavigator();
const StackNav = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="AssetExample" component={AssetExample}  options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Create drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNav = ({ handleLogout }) => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} onLogout={handleLogout}/>}
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        borderTopEndRadius:50,
      },}} // Set background color of the drawer
  >
    <Drawer.Screen name="StackNav" component={StackNav} options={{ headerShown: false }} />
  </Drawer.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false); // Set isLoggedIn to false to logout
  }, []);

  // Conditional rendering based on authentication state
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      {isLoggedIn ? (
        <DrawerNav handleLogout={handleLogout} /> 
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login"
            options={{ headerShown: false }}
          >
            {props => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="ResetPasswordScr" component={ResetPasswordScr} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
