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
import HomeScrFun from './components/DScreen/Home';
import ProfileScrFun from './components/DScreen/Profile';
import NotificationScrFun from './components/DScreen/Notification';
import DetailsViewScrFun from './components/DScreen/DetailsView';
import DownloadScrFun from './components/DScreen/DownloadReportFilter';
import Vcolor from './global';

const Drawer = createDrawerNavigator();

const DrawerNav = ({ handleLogout }) => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} onLogout={handleLogout}/>}
    screenOptions={{
      drawerStyle: {
        backgroundColor:Vcolor.primary,
        borderTopEndRadius:50,
      },}} // Set background color of the drawer
      initialRouteName="Home"
  >
    <Drawer.Screen name="Home" component={HomeScrFun} options={{ headerShown: false }} />
    <Drawer.Screen name="Profile" component={ProfileScrFun} options={{ headerShown: true }} />
    <Drawer.Screen name="Notification" component={NotificationScrFun} options={{ headerShown: true }} />
    <Drawer.Screen name="Details" component={DetailsViewScrFun} options={{ headerShown: true }} />
    <Drawer.Screen name="Download" component={DownloadScrFun} options={{ headerShown: true }} />
  </Drawer.Navigator>
);

const App = () => {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginSuccess = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false); // Set isLoggedIn to false to logout
  }, []);

  // Conditional rendering based on authentication state
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Vcolor.primary} barStyle="light-content" />
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
