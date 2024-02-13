import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';

export const useAppInit = () => {
  const [isAppReady, setAppReady] = useState(false);

  const prepare = async () => {
    try {
      //   await Font.loadAsync(FontsImport);
      // if (isFirstStart) {
      //   // https://docs.expo.dev/versions/latest/sdk/securestore/#ios
      //   // For iOS standalone apps, data stored with expo-secure-store can persist across app installs.
      //   // Remove token to make user login.
      //   await removeToken();
      // }
    } catch (error) {
      console.log('Error Fonts', error);
    } finally {
      setAppReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  useEffect(() => {
    prepare();
  }, []);

  return {
    isAppReady,
    onLayoutRootView,
  };
};
