import React from 'react';
import {ViewStyle} from 'react-native';

/* components */
import RadialGradient from 'react-native-radial-gradient';
import {View} from 'react-native';

interface Props {
  style?: ViewStyle | Array<ViewStyle>;
  size?: number;
};

const circleSize = 200;

export default function GradientCircle ({style, size = circleSize}: Props): JSX.Element {

  return (
    <View style={[{
      overflow: 'hidden',
    }, style]}>
      <RadialGradient
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        colors={['#94dfe0','#07b8e9']}
        stops={[0.3,1]}
      />
    </View>
  );
}

