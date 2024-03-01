import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useAppInit } from '@hooks';
import { useStyles } from '@hooks';
import { NavMain } from '@navigation';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function App() {
  const { isAppReady, onLayoutRootView } = useAppInit();
  const { defaultStyles } = useStyles();

  if (!isAppReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={defaultStyles.navigation}>
          <StatusBar style="auto" />
          <NavMain />
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
