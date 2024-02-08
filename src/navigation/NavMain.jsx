import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavTabs from './NavTabs';

const Stack = createNativeStackNavigator();

const NavMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'HEY'} component={NavTabs} />
    </Stack.Navigator>
  );
};

export default NavMain;
