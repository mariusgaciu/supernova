import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FeedScreen } from '@screens';

// TODO: Make this as dynamic user selectable
const screens = [
  {
    id: 1,
    name: 'Top',
    storyType: 'topstories',
  },
  {
    id: 2,
    name: 'Best',
    storyType: 'beststories',
  },
  {
    id: 3,
    name: 'New',
    storyType: 'newstories',
  },
  {
    id: 4,
    name: 'Ask',
    storyType: 'askstories',
  },
  {
    id: 5,
    name: 'Show',
    storyType: 'showstories',
  },
  {
    id: 6,
    name: 'Job Stories',
    storyType: 'jobstories',
  },
];

const Tab = createMaterialTopTabNavigator();

const TabsTop = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <Tab.Navigator
      initialLayout={{
        height: height,
        width: width,
      }}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        lazy: true,
      }}
    >
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.id}
          name={screen.name}
          component={FeedScreen}
          initialParams={{ storyType: screen.storyType }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsTop;
