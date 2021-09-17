import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import BackgroundCircles from './components/BackgroundCircles';
import BackHeader from './components/BackHeader';

/* hooks */
import {useRoute} from '@react-navigation/native';
import {useInstructor} from './hooks/useInstructor';

/* ui */
import {colors, SCREEN_WIDTH} from '@ui';

/* types */
import {Instructor} from '@types';

export default function InstructorProfile (): JSX.Element {
  const {instructorId} = useRoute().params || {};
  const [instructor, loading, error] = useInstructor(instructorId);
  

  return (
    <View style={styles.mainContainer}>
      <BackHeader>Profile</BackHeader>
      <View style={styles.mainInfoContainer}>
        {/* header */}
        {/* bio */}
      </View>
      
      <BackgroundCircles/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  mainInfoContainer: {

  },
});
