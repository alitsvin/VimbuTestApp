import React from 'react';
import {ViewStyle} from 'react-native';

/* components */
import RadialGradient from 'react-native-radial-gradient';
import {View} from 'react-native';

interface Props {
  style?: ViewStyle | Array<ViewStyle>;
  size?: number;
  colors?: Array<string>;
  stops?: Array<number>;
};

const circleSize = 200;
const defaultColors = ['#94dfe0', '#07b8e9'];
const defaultStops = [0.3, 1];

export default function GradientCircle ({
  style,
  size = circleSize,
  colors = defaultColors,
  stops = defaultStops,
}: Props): JSX.Element {

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
        colors={colors}
        stops={stops}
      />
    </View>
  );
}

