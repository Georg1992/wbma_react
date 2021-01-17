import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const uploadsUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + props.singleMedia.filename}}
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'mistyrose',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  imageBox: {
    flex: 1,
    borderRadius: 200 / 2,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 200 / 2,
  },

  textBox: {
    justifyContent: 'center',
    flex: 2,
    padding: 6,
  },
  listTitle: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20,
  },
});

ListItem.propTypes = {singleMedia: PropTypes.object};

export default ListItem;
