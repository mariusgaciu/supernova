import { useColorScheme, StyleSheet } from 'react-native';

import { Colors } from '@config';
import { FontStyles } from '@config';

export const useTheme = () => {
  const systemTheme = useColorScheme();

  const theme = Colors[systemTheme];

  const defaultStyles = { ...theme, ...FontStyles };

  return { defaultStyles };
};
