import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as Sentry from '@sentry/react-native';
import Constants from 'expo-constants';

import { useAppInit } from '@hooks';
import { useStyles } from '@hooks';
import { NavMain } from '@navigation';

Sentry.init({
  dsn: Constants.expoConfig.extra.SENTRY_DSN,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

function App() {
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

export default Sentry.wrap(App);
