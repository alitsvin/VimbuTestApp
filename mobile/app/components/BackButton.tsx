import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/* hooks */
import {useNavigation} from '@react-navigation/native';

/* ui */
import {colors} from '@ui';

/* types */
import {ViewStyle} from 'react-native';

interface Props {
  onBack?: (() => any);
  style?: ViewStyle;
  icon?: 'arrow' | 'chevron';
}

export default function BackButton ({onBack, style, icon = 'chevron'}: Props): JSX.Element {
  const navigation = useNavigation();
  
  const goBack = (): void => {
    navigation.goBack();
    if (typeof onBack === 'function') {
      onBack();
    }
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[styles.mainContainer, style]}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
    >
      <Icon
        name={icon === 'arrow' ? 'arrow-left' : 'chevron-left'}
        size={18}
        color={colors.textLight}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});
