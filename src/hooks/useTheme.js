import { useColorScheme, StyleSheet } from 'react-native';

import { Colors } from '@config';

export const useTheme = () => {
  const systemTheme = useColorScheme();

  const theme = Colors[systemTheme];

  return { theme };
};
