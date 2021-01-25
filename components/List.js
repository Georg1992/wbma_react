import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useLoadMedia} from './hooks/ApiHooks';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const List = ({navigation}) => {
  const mediaArray = useLoadMedia();
  return (
    <View>
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ListItem navigation={navigation} singleMedia={item} />
        )}
      />
      <Text></Text>
    </View>
  );
};

List.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default List;
