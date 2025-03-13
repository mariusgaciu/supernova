import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LOGIN"
        component={LoginScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
