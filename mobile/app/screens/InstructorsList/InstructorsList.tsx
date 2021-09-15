import React from 'react';
import {StyleSheet} from 'react-native';

/* components */
import {View, Text} from 'react-native';

/* utils */

interface Props {};

const InstructorsList: React.FC<Props> = ({}) => {
  return null
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>
        Hi!
      </Text>
    </View>
  );
}

export default InstructorsList;

const styles = StyleSheet.create({
  mainContainer: {},
  text: {
    color: '#999999',
  },
});
