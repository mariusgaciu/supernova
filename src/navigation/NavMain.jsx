import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavTabs from './NavTabs';
import { SCREEN_NAME } from '@config';

const Stack = createNativeStackNavigator();

const NavMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.TABS}
        component={NavTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavMain;
