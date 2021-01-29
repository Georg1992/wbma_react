import {useEffect, useState} from 'react';
import {baseUrl} from '../../utils/variables';

const doFetch = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('doFetch failed');
  }
  return await response.json();
};

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async (limit) => {
    try {
      const listResponse = await fetch(baseUrl + 'media?limit=' + limit);
      const listJson = await listResponse.json();

      const media = await Promise.all(
        listJson.map(async (item) => {
          const fileResponse = await fetch(baseUrl + 'media/' + item.file_id);
          const fileJson = await fileResponse.json();
          return fileJson;
        })
      );
      console.log('media:', media);
      setMediaArray(media);
    } catch (e) {
      console.error('loadMedia error', e);
    }
  };
  useEffect(() => {
    loadMedia(3);
  }, []);
  return mediaArray;
};

const useLogin = () => {
  const postLogin = async (userCredentials) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userCredentials),
    };
    try {
      const userData = await doFetch(baseUrl + 'login', options);
      return userData;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return {postLogin};
};

const useUser = () => {
  const postRegister = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    try {
      const userData = await doFetch(baseUrl + 'users', fetchOptions);
      return userData;
    } catch (e) {
      console.log('ApiHooks register', e.message);
      throw new Error(e.message);
    }
  };

  const checkToken = async (token) => {
    try {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      const response = await fetch(baseUrl + 'users/user', options);
      const userData = response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return {postRegister, checkToken};
};

const useTag = () => {
  const getAvatar = async (userID) => {
    try {
      const avatarList = await doFetch(baseUrl + 'tags/avatar_' + userID);
      return avatarList;
    } catch (e) {
      throw new Error(e.message);
    }
  };
  return {getAvatar};
};

export {useLoadMedia, useLogin, useUser, useTag};
