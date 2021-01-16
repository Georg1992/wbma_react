/* global require */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
import GlobalStyles from './utils/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <StatusBar style="light" backgroundColor="blue"></StatusBar>
      <View style={styles.header}>
        <Text>HELOO CATS!</Text>
        <ImageBackground
          source={require('./assets/cat.png')}
          style={styles.headerIMG}
          imageStyle={{}}
        ></ImageBackground>
      </View>

      <View style={styles.listView}>
        <List />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 150,
  },
  headerIMG: {
    width: 120,
    height: 120,
  },
  listView: {
    flex: 1,
  },
});
export default App;
