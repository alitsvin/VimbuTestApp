import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import Image from 'react-native-fast-image';

/* ui */
import {colors} from '@ui';

/* types */
import {ImageStyle} from 'react-native-fast-image';

interface AvatarImageProps {
  src: {uri: string};
  style?: ImageStyle;
  size?: number;
};

const defautSize = 95;

export default function AvatarImage ({src, style, size = defautSize}: AvatarImageProps): JSX.Element {
  return (
    <Image
      style={[
        styles.image, {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      source={src}
      resizeMode={Image.resizeMode.cover}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: defautSize,
    height: defautSize,
    borderRadius: defautSize / 2,
    borderWidth: 3,
    borderColor: colors.buttonBlue,
  },
});
