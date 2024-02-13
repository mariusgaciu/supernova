import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '@hooks';
import { TAB_NAME, TAB_TITLE } from '@config';
import {
  AccountScreen,
  FeedScreen,
  NotificationsScreen,
  SearchScreen,
} from '@screens';
import { Icon } from '@libs';

const Tab = createBottomTabNavigator();
const NavTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary.color,
      }}
    >
      <Tab.Screen
        component={FeedScreen}
        name={TAB_NAME.FEED}
        options={{
          title: TAB_TITLE.FEED,
          tabBarIcon: ({ color }) => (
            <Icon name={'newspaper-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name={TAB_NAME.SEARCH}
        options={{
          title: TAB_TITLE.SEARCH,
          tabBarIcon: ({ color }) => (
            <Icon name={'search-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={NotificationsScreen}
        name={TAB_NAME.NOTIFICATIONS}
        options={{
          title: TAB_TITLE.NOTIFICATIONS,
          tabBarIcon: ({ color }) => (
            <Icon name={'notifications-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.ACCOUNT}
        component={AccountScreen}
        options={{
          title: TAB_TITLE.ACCOUNT,
          tabBarIcon: ({ color }) => (
            <Icon name={'person-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavTabs;
