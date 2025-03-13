import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TempSetting } from '@features/Settings';

function SettingsScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text>AccountScreen</Text>
      <TempSetting />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default SettingsScreen;
