import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card} from 'react-native-elements';
import {useTag} from '../components/hooks/ApiHooks';
import {uploadUrl} from '../utils/variables';

const Profile = ({navigation}) => {
  const {loggedIn, setIsLoggedIn, user} = useContext(MainContext);
  console.log(loggedIn);
  const [avatar, setAvatar] = useState();
  const {getAvatar} = useTag();

  const logout = async () => {
    console.log('login out');
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarList = await getAvatar(user.user_id);
        setAvatar(uploadUrl + avatarList.pop().filename);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <Card>
      <Card.Title>
        <Text h1>{user.username}</Text>
      </Card.Title>
      <Card.Image source={{uri: avatar}} />
      <Button title={'Logout'} onPress={logout} />
    </Card>
  );
};

Profile.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default Profile;
