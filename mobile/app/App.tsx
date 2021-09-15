// import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

/* components */
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './router/Main';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App () {
  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
        <MainRouter/>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};
