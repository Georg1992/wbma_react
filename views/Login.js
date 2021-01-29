import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../components/hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = ({navigation}) => {
  // props is needed for navigation
  const {isLoggedIn, setIsLoggedIn, setUser} = useContext(MainContext);
  console.log('LoggedIn', isLoggedIn);
  const {checkToken} = useUser();

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        setIsLoggedIn(true);
        setUser(userData);
        navigation.navigate('Home');
      } catch (error) {
        console.log('token error:', error.message);
      }
    }
  };
  useEffect(() => {
    getToken();
    if (isLoggedIn) {
      // this is to make sure isLoggedIn has changed, will be removed later
      navigation.navigate('Home');
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'iosza' ? 'padding' : 'height'}
    >
      <View style={styles.form}>
        <Text>Login</Text>
        <LoginForm navigation={navigation} />
        <Text>Registration</Text>
        <RegisterForm navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
