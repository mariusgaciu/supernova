import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import { useAppInit } from '@hooks';
import { useTheme } from '@hooks';
import { NavMain } from '@navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isAppReady, onLayoutRootView } = useAppInit();
  const { defaultStyles } = useTheme();

  if (!isAppReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer theme={defaultStyles.navigation}>
        <StatusBar style="auto" />
        <NavMain />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
