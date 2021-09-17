import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/* ui */
import {colors} from '@ui';

interface RowParams {
  iconName: string;
  param: {name: string, value: string};
};

export default function LessonInfo (): JSX.Element {

  return (
    <View style={styles.mainContainer}>
      <Title/>
      <Description/>
      
      <View style={styles.rowsContainer}>
        <LessonInfoRow
          iconName='map-marker-alt'
          param={{name: 'Date', value: '1 Dec - 2 Dec'}}
        />
        <LessonInfoRow
          iconName='clock'
          param={{name: 'Hour', value: '10 AM - 2 PM'}}
        />
        <LessonInfoRow
          iconName='user-friends'
          param={{name: 'People', value: '3'}}
        />
      </View>
    </View>
  );
}

function Title (): JSX.Element {
  return (
    <Text style={styles.title}>About the lesson</Text>
  );
}

function Description (): JSX.Element {
  return (
    <Text style={styles.description}>Enjoy the ski trip in Sierra Nevada! See you on the slopes!</Text>
  );
}

function LessonInfoRow ({iconName, param}: RowParams): JSX.Element {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.rowIconContainer}>
        <Icon
          name={iconName}
          size={16}
          color={colors.buttonBlue}
        />
      </View>
      <Text style={styles.rowParamName}>{ param.name }</Text>
      <Text style={styles.rowParamValue}>{ param.value }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    flex: 0,
  },
  title: {
    color: colors.textGray,
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {
    color: colors.textGray,
    fontSize: 11,
    fontWeight: '500',
  },

  rowsContainer: {
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  rowIconContainer: {
    flex: 0,
    minWidth: 30,
  },
  rowParamName: {
    flex: 1,
    color: colors.textGray,
    fontSize: 13,
  },
  rowParamValue: {
    flex: 0,
    color: colors.textGray,
    fontSize: 13,
  },
});
