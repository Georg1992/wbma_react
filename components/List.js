import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit) => {
    try {
      const response = await fetch(baseUrl + 'media?limit=' + limit);
      const json = await response.json();

      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(baseUrl + 'media/' + item.file_id);
          const json = await response.json();
          return json;
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
