import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';
import {ListItem as RNEListItem} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListItem = ({navigation, singleMedia}) => {
  return (
    <RNEListItem
      bottomDivider
      onPress={() => {
        navigation.navigate('Single', {file: singleMedia});
      }}
    >
      <TouchableOpacity>
        <Image
          source={{uri: uploadUrl + singleMedia.filename}}
          style={{height: 200, width: 200}}
        />

        <RNEListItem.Content>
          <RNEListItem.Title> {singleMedia.title}</RNEListItem.Title>
          <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
        </RNEListItem.Content>
      </TouchableOpacity>
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
