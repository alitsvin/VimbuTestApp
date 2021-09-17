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

      <BottomContainer/>

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

function Title (): JSX.Element {
  return (
    <Text style={styles.title}>
      Choose Your Instructor
    </Text>
  );
}

function BottomContainer (): JSX.Element {
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={0.7}
      >
        <Text style={styles.bottomButtonText}>
          Book Lesson 75€
        </Text>
      </TouchableOpacity>
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


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 20,
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
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomButton: {
    backgroundColor: colors.buttonBlue,
    borderRadius: 7,
    width: 300,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    color: colors.textLight,
    fontSize: 21,

  },
  backgroundCircle: {
    position: 'absolute',
    zIndex: -1,
    borderRadius: circleSize / 2,
    top: -(circleSize - circleVisibleHeight),
    left: -(circleSize - SCREEN_WIDTH) / 2
  },
});
