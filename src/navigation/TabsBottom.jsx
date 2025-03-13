import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@hooks';
import { TAB_NAME, TAB_TITLE } from '@config';
import TabsTop from './TabsTop';
import { NotificationsScreen } from '@screens';
import { SearchScreen } from '@features/Search';
import { ProfileScreen } from '@features/Profile';
import { Icon } from '@libs';

const Tab = createBottomTabNavigator();
const TabsBottom = () => {
  const { defaultStyles } = useStyles();

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
          headerShown: false,
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
      {/* <Tab.Screen
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
      /> */}
      <Tab.Screen
        name={TAB_NAME.PROFILE}
        component={ProfileScreen}
        options={{
          title: TAB_TITLE.PROFILE,
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
