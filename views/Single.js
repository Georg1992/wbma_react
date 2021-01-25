import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';

const Single = ({route}) => {
  const {file} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{file.title}</Text>
      <Image
        source={{
          uri: uploadUrl + file.filename,
        }}
        style={styles.img}
      />
    </SafeAreaView>
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
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
