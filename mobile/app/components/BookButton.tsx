import React from 'react';
import {StyleSheet, Alert} from 'react-native';

/* components */
import {Text, TouchableOpacity} from 'react-native';

/* ui */
import {colors} from '@ui';

export default function BookButton (): JSX.Element {
  const openAlert = () => {
    Alert.alert(
      "You booked your best lesson!",
      "We are working on extending the app! Follow the updates and prepare your board!",
      [],
      {cancelable: true}
    );
  }

  return (
    <TouchableOpacity
      onPress={openAlert}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>
        Book Lesson 75€
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBlue,
    borderRadius: 7,
    width: 300,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 21,
    letterSpacing: 1,
    fontWeight: '600',
  },
});
