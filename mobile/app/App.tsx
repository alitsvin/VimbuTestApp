import 'react-native-gesture-handler';
import React from 'react';

/* components */
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainRouter from './router/Main';

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content'/>
      <MainRouter/>
    </NavigationContainer>
  );
};
