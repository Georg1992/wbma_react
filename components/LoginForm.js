import React, {useContext} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import useLoginForm from './hooks/LoginHook';
import {useLogin} from './hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const LoginForm = ({navigation}) => {
  const {inputs, handleInputChange} = useLoginForm();
  const {postLogin} = useLogin();
  const {setIsLoggedIn} = useContext(MainContext);

  const doLogin = async () => {
    try {
      const userData = await postLogin(inputs);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', userData.token);
    } catch (error) {
      console.log('login error:', error);
      Alert.alert('Login Error', error);
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="login" onPress={doLogin}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

LoginForm.propTypes = {
  navigation: PropTypes.object,
};

export default LoginForm;
