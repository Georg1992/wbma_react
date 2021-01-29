import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';
import {Card} from 'react-native-elements';

const Single = ({route}) => {
  const {file} = route.params;

  return (
    <Card style={styles.container}>
      <Card.Title>{file.title}</Card.Title>
      <Card.Image
        source={{
          uri: uploadUrl + file.filename,
        }}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
