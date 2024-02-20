import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FeedScreen } from '@screens';

// TODO: Make this as dynamic user selectable
const screens = [
  {
    id: 1,
    name: 'Top',
  },
  {
    id: 2,
    name: 'Best',
  },
  {
    id: 3,
    name: 'New',
  },
  {
    id: 4,
    name: 'Ask',
  },
  {
    id: 5,
    name: 'Show',
  },
  {
    id: 6,
    name: 'Job Stories',
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
      }}
    >
      {screens.map((screen) => (
        <Tab.Screen key={screen.id} name={screen.name} component={FeedScreen} />
      ))}
    </Tab.Navigator>
  );
};

export default TabsTop;
