import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/* screens */
import InstructorsList from '@screens/InstructorsList/InstructorsList';
import InstructorProfile from '@screens/InstructorProfile/InstructorProfile';

const Stack = createStackNavigator();

export default function MainNavigationStack () {

  return (
    <Stack.Navigator
      initialRouteName='InstructorsList'
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name='Auth' component={null}/> */}
      <Stack.Screen
        name='InstructorsList'
        component={InstructorsList}
      />
      <Stack.Screen
        name='InstructorProfile'
        component={InstructorProfile}
      />
      {/* <Stack.Screen name='Profile' component={null}/> */}
    </Stack.Navigator>
  );
}

