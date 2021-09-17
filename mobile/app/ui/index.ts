import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const colors = {
  buttonBlue: '#17C6FA',
  textDarkGray: '#324149',
  textGray: '#526169',
  textLight: '#ffffff',
  textLightGreen: '#80F2a2',
};
