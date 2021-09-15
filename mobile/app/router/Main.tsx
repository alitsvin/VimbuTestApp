import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';

/* screens */
import InstructorsList from '../screens/InstructorsList/InstructorsList';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

export default function MainNavigationStack () {

  return (
    <Stack.Navigator
      initialRouteName='InstructorsList'
    >
      {/* <Stack.Screen name='InstructorsList' component={Text}/> */}
      {/* <Stack.Screen name='Auth' component={null}/> */}
      <Stack.Screen name='InstructorsList' component={InstructorsList}/>
      {/* <Stack.Screen name='InstructorProfile' component={null}/> */}
      {/* <Stack.Screen name='Profile' component={null}/> */}
    </Stack.Navigator>
  );
}

