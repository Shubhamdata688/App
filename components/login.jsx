import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      if (email === 'shubhamkumarjnu@gmail.com' && password === 'shubham') {
        onLoginSuccess();  // Update the global state on successful login
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
      setIsLoading(false);
    }, 500);
  };;

  const handleRegistration = () => {
    navigation.navigate('Registration')
  };

  const handleRestPass = () => {
    navigation.navigate('ResetPasswordScr')
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        accessibilityLabel="Enter your email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        accessibilityLabel="Enter your password"
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={handleLogin} disabled={isLoading} />
          <Button title="Register" onPress={handleRegistration} />
          <Button title="Forgot Password"  onPress={handleRestPass}/>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default LoginScreen;
