import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';

const url =
  'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setMediaArray(json);
    } catch (e) {
      console.error('loadMedia error', e);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <View>
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItem singleMedia={item} />}
      />
      <Text></Text>
    </View>
  );
};

export default List;
