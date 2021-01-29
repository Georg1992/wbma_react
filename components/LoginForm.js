import React, {useContext, useState} from 'react';
import {View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import useLoginForm from './hooks/LoginHook';
import {useLogin} from './hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const LoginForm = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {inputs, handleInputChange} = useLoginForm();
  const {postLogin} = useLogin();
  const {setIsLoggedIn} = useContext(MainContext);

  const doLogin = async () => {
    setLoading(true);
    try {
      const userData = await postLogin(inputs);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', userData.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('login error:', error);
      Alert.alert('Login Error', error);
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
      </View>
      <Button title="login" onPress={doLogin} loading={loading}></Button>
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
};

export default LoginForm;
