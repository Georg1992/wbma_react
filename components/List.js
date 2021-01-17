import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useLoadMedia} from './hooks/ApiHooks';
import ListItem from './ListItem';

const List = ({navigation}) => {
  const mediaArray = useLoadMedia();
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
