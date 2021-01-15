import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.itemInList}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.listTitle}> {props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemInList: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'green',
    borderRadius: 16,
  },

  imageBox: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 150,
    borderRadius: 6,
  },

  textBox: {
    flex: 2,
    padding: 6,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

ListItem.propTypes = {singleMedia: PropTypes.object};

export default ListItem;
