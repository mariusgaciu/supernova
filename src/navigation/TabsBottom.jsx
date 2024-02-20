import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '@hooks';
import { TAB_NAME, TAB_TITLE } from '@config';
import TabsTop from './TabsTop';
import {
  AccountScreen,
  FeedScreen,
  NotificationsScreen,
  SearchScreen,
} from '@screens';
import { Icon } from '@libs';

const Tab = createBottomTabNavigator();
const TabsBottom = () => {
  const { defaultStyles } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: defaultStyles.primary.color,
      }}
    >
      <Tab.Screen
        component={TabsTop}
        name={TAB_NAME.FEED}
        options={{
          title: TAB_TITLE.FEED,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'newspaper-fill' : 'newspaper-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name={TAB_NAME.SEARCH}
        options={{
          title: TAB_TITLE.SEARCH,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'search-fill' : 'search-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        component={NotificationsScreen}
        name={TAB_NAME.NOTIFICATIONS}
        options={{
          title: TAB_TITLE.NOTIFICATIONS,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'notifications-fill' : 'notifications-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.ACCOUNT}
        component={AccountScreen}
        options={{
          title: TAB_TITLE.ACCOUNT,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'person-fill' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsBottom;
