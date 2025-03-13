import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabsBottom from './TabsBottom';
import { SCREEN_NAME } from '@config';
import { StoryScreen } from '@screens';
import { AuthNav } from '@features/Auth';

const Stack = createNativeStackNavigator();

const NavMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.TABS_BOTTOM}
        component={TabsBottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SCREEN_NAME.STORY} component={StoryScreen} />
      <Stack.Screen
        name="AUTH"
        component={AuthNav}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default NavMain;
