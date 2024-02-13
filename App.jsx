import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAppInit } from '@hooks';
import { useTheme } from '@hooks';
import { NavMain } from '@navigation';
export default function App() {
  const { isAppReady, onLayoutRootView } = useAppInit();
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme.navigation}>
      <StatusBar style="auto" />
      <NavMain />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
