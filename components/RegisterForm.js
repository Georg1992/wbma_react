import React, {useContext} from 'react';
import {View, Button, Alert} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import useSignUpForm from './hooks/RegisterHook';
import {useLogin, useUser} from './hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const RegisterForm = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {inputs, handleInputChange} = useSignUpForm();
  const {postRegister} = useUser();
  const {postLogin} = useLogin();

  const doRegister = async () => {
    try {
      const result = await postRegister(inputs);
      console.log('doRegister ok', result.message);
      Alert.alert(result.message);

      const userData = postLogin(inputs);
      AsyncStorage.setItem('token', userData.token);
      setIsLoggedIn(true);
      setUser(userData.user);
    } catch (error) {
      console.log('reg error', error);
      Alert.alert('registration failed');
    }
  };
  return (
    <View>
      <View>
        <FormTextInput
          autoCapitalize="none"
          placeholder="username"
          onChangeText={(txt) => handleInputChange('username', txt)}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="password"
          onChangeText={(txt) => handleInputChange('password', txt)}
          secureTextEntry={true}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="email"
          onChangeText={(txt) => handleInputChange('email', txt)}
        />
        <FormTextInput
          autoCapitalize="none"
          placeholder="full name"
          onChangeText={(txt) => handleInputChange('full_name', txt)}
        />
        <Button title="Register!" onPress={doRegister} />
      </View>
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterForm;
