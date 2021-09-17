import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import GradientCircle from '../../InstructorsList/components/GradientBackground';

/* ui */
import {SCREEN_WIDTH} from '@ui';

const circleSize = 800;
const circleVisibleHeight = 400;

export default function BackgroundCircles (): JSX.Element {
  return (
    <>
      <GradientCircle
        size={circleSize}
        style={[styles.backgroundCircle, {
          left: styles.backgroundCircle.left + 20,
        }]}
      />
      <GradientCircle
        size={circleSize + 30}
        style={[styles.backgroundCircle, {
          top: styles.backgroundCircle.top - 10,
          left: styles.backgroundCircle.left - 50,
          zIndex: -2,
        }]}
        colors={['#94dfe0', '#37c8e9']}
      />
    </>
  )
}

const styles = StyleSheet.create({
  backgroundCircle: {
    position: 'absolute',
    zIndex: -1,
    borderRadius: circleSize / 2,
    top: -(circleSize - circleVisibleHeight),
    left: -(circleSize - SCREEN_WIDTH) / 2
  },
});
