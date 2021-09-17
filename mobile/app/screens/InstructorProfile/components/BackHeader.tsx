import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import {BackButton} from '@components';

/* ui */
import {colors, STATUS_BAR_HEIGHT} from '@ui';

/* types */
import {ViewStyle} from 'react-native';

interface HeaderProps {
  children: JSX.Element | Array<JSX.Element> | string;
  style?: ViewStyle;
};
interface TitleProps {
  children: string;
};

export default function BackHeader ({children, style}: HeaderProps): JSX.Element {

  return (
    <View style={[styles.mainContainer, style]}>
      <BackButton icon='arrow'/>
      {typeof children === 'string' ? (
        <Title>{children}</Title>
      ) : children}
    </View>
  );
}

function Title ({children}: TitleProps): JSX.Element {
  return (
    <Text style={styles.titleText}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: STATUS_BAR_HEIGHT,
    padding: 5,
    paddingLeft: 20,
  },
  titleText: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 30,
  },
});
