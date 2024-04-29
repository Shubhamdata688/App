import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// import '../../global'

// const apiUrl = global.API_URL

const ResetPasswordScr = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    verificationCode: '',
  });

  const [verificationCodeSendBtnEnable, setverificationCodeSendBtnEnable] = useState(true);
  const [submitPassChangeBtnEnable, setsubmitPassChangeBtnEnable] = useState(true)
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveData = async () => {

    const { email, password, password2, verificationCode } = formData;

    // Check if all fields have a value
    if (!email || !password || !password2 || !verificationCode) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    // Check if the email is in a valid format
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Check if passwords match
    if (password !== password2) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }
    if (password.length <= 8) {
      Alert.alert('Password', 'Passwords must be greater than 8 characters.');
      return;
    }

    // this line is for send the data or receiving the data from server server comnnection 

    // try {
    //   setsubmitPassChangeBtnEnable(false)
    //   fetch(apiUrl+'api/user/reset-password/'+verificationCode+'/', {
    //             method: 'POST',
    //             body: JSON.stringify({"password":password,
    //                                  "password2":password2}),
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           })
    //             .then(response => {
    //               if (response.status === 200 || response.status === 400 ) {
    //                 return response.json();
    //               }
    //             })
    //             .then(data => {
    //               if (data && data.errors) {
    //                 alert(data.errors.non_field_errors[0]);
    //                 setsubmitPassChangeBtnEnable(true)
    //               }
    //               else{
    //                 // console.log(data)
    //                 if(data.msg)
    //                 {
    //                   alert(data.msg);
    //                   navigation.reset({
    //                                   index: 0,
    //                                   routes: [{
    //                                     name: 'Login'
    //                                   }],
    //                                 });
    //                 }
    //                 }
    //             })
    //             .catch(err => {
    //               alert('Something went Wrong '+err)
    //               setverificationCodeSendBtnEnable(true)
    //             });

    // } catch (error) {
    //   alert('Something went Wrong '+error)
    //   setverificationCodeSendBtnEnable(true)
    // }
  };

  const resetForm = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to clear all form data?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setFormData({
              email: '',
              password: '',
              password2: '',
              verificationCode: '',
            });
            // alert('Form data cleared!');
            setverificationCodeSendBtnEnable(true)
            setsubmitPassChangeBtnEnable(true)
          },
        },
      ],
      { cancelable: false }
    );
  };

  const sendVerificationCode = () => {
    const { email } = formData;
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // server connection 
    
    // try {
    //   setverificationCodeSendBtnEnable(false)
    //   fetch(apiUrl+'api/user/send-reset-password-email/', {
    //             method: 'POST',
    //             body: JSON.stringify({"email":email}),
    //             headers: {
    //               'Content-Type': 'application/json'
    //             }
    //           })
    //             .then(response => {
    //               if (response.status === 200 || response.status === 400 ) {
    //                 return response.json();
    //               }
    //             })
    //             .then(data => {
    //               if (data && data.errors) {
    //                 alert(data.errors.non_field_errors[0]);
    //                 setverificationCodeSendBtnEnable(true)
    //               }
    //               else{
    //                 // console.log(data)
                    
    //                     if(data.msg)
    //                     {
    //                       alert(data.msg);
    //                     }
    //                 }
    //             })
    //             .catch(err => {
    //               alert('Something went Wrong '+err)
    //               setverificationCodeSendBtnEnable(true)
    //             });

    // } catch (error) {
    //   alert('Something went Wrong '+error)
    //   setverificationCodeSendBtnEnable(true)
    // }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={verificationCodeSendBtnEnable}

      />
      <View style={{ alignItems: 'flex-end' }}>

        {verificationCodeSendBtnEnable && (
        <TouchableOpacity
          onPress={sendVerificationCode}
          style={{ borderWidth: 1, backgroundColor: '#003E58', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 50 }}
        >
          <Text style={{ color: '#fff' }}>Send Code</Text>

        </TouchableOpacity> )}
        {!verificationCodeSendBtnEnable && (
        <TouchableOpacity
          onPress={()=> alert("Clear form and Re-Enter Details")}
          style={{ borderWidth: 1, backgroundColor: '#003E58', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 50 }}
        >
          <Text style={{ color: '#fff' }}>Re-Send Code</Text>

        </TouchableOpacity> )}
      </View>

      <Text>Password:</Text>
      <View style={styles.passwordInputContainer}>
        <FontAwesome name="lock" size={20} color="#003E58" style={styles.passwordIcon} />
        <TextInput
          style={styles.passwordInput}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry={!showPassword}
        />
        {/* Show/Hide Password Toggle */}
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      <Text>Re-Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={formData.password2}
        onChangeText={(text) => setFormData({ ...formData, password2: text })}
        secureTextEntry={!showPassword}
      />

      {!verificationCodeSendBtnEnable && (
        <View>
          <Text>Verification Code:</Text>
          <TextInput
            style={styles.input}
            value={formData.verificationCode}
            onChangeText={(text) => setFormData({ ...formData, verificationCode: text })}
          />
        </View>
      )}

      {/* Save Button */}
      {submitPassChangeBtnEnable && (
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Set Password</Text>
      </TouchableOpacity> )}

      {!submitPassChangeBtnEnable && (
      <TouchableOpacity style={styles.button} onPress={()=> alert("Wait")}>
        <Text style={styles.buttonText}>Process ... </Text>
      </TouchableOpacity> )}

      {/* Reset Button */}
      <TouchableOpacity style={styles.button} onPress={resetForm}>
        <Text style={styles.buttonText}>Clear Form</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordIcon: {
    marginRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#003E58',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ResetPasswordScr;