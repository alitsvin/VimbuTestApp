import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import BackgroundCircles from './components/BackgroundCircles';

/* ui */
import {colors, SCREEN_WIDTH} from '@ui';


export default function InstructorProfile (): JSX.Element {

  return (
    <View style={styles.mainContainer}>
      {/* header */}
      
      <BackgroundCircles/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});
