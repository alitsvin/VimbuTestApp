import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text, TouchableOpacity} from 'react-native';
import InstructorsCarousel from './components/InstructorsCarousel';
import GradientCircle from './components/GradientBackground';

/* hooks */
import {useInstructors} from './hooks/useInstructors';

/* ui */
import {colors, SCREEN_WIDTH} from '@ui';


const circleSize = 800;
const circleVisibleHeight = 300;

export default function InstructorsList (): JSX.Element {
  const [instructors, loading, error] = useInstructors();

  return (
    <View style={styles.mainContainer}>
      <Header/>
      <Title/>
      {instructors.length > 0 ? (
        <InstructorsCarousel data={instructors}/>
      ) : (
        <Text>There are no any available instructors for now :(</Text>
      )}

      <BackgroundCircle/>
    </View>
  );
}

function Header (): JSX.Element {
  return (
    <View style={styles.header}>
      <TouchableOpacity/>
    </View>
  );
}

function BackgroundCircle (): JSX.Element {
  return (
    <GradientCircle
      size={circleSize}
      style={styles.backgroundCircle}
    />
  );
}

function Title (): JSX.Element {
  return (
    <Text style={styles.title}>
      Choose Your Instructor
    </Text>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0,
    height: 60,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    color: colors.textLight,
    fontSize: 21,
    marginVertical: 10,
  },
  backgroundCircle: {
    position: 'absolute',
    zIndex: -1,
    borderRadius: circleSize / 2,
    top: -(circleSize - circleVisibleHeight),
    left: -(circleSize - SCREEN_WIDTH) / 2
  },
});
