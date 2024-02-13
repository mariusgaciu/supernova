import { useColorScheme, StyleSheet } from 'react-native';

import { Colors } from '@config';

export const useTheme = () => {
  const systemTheme = useColorScheme();

  const theme = styles[systemTheme];

  return { theme };
};

const styles = StyleSheet.create({
  ...Colors,
});
