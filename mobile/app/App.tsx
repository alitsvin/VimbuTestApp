import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainRouter from './router/Main';
import {View} from 'react-native';

export default function App () {
  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <StatusBar barStyle='dark-content'/>
        <MainRouter/>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  }
});
