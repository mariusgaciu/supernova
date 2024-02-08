import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TAB_NAMES, TAB_TITLE } from '@config';
import {
  AccountScreen,
  FeedScreen,
  NotificationsScreen,
  SearchScreen,
} from '@screens';

const Tab = createBottomTabNavigator();
const NavTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={FeedScreen}
        name={TAB_NAMES.FEED}
        options={{
          title: TAB_TITLE.FEED,
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name={TAB_NAMES.SEARCH}
        options={{
          title: TAB_TITLE.SEARCH,
        }}
      />
      <Tab.Screen
        component={NotificationsScreen}
        name={TAB_NAMES.NOTIFICATIONS}
        options={{
          title: TAB_TITLE.NOTIFICATIONS,
        }}
      />
      <Tab.Screen
        name={TAB_NAMES.ACCOUNT}
        component={AccountScreen}
        options={{
          title: TAB_TITLE.ACCOUNT,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavTabs;
