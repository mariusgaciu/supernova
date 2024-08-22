import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useStoreOptions } from '@services';
import { Button } from '@components';

function TempSetting(props) {
  const { setCommentSorting } = useStoreOptions();

  const handleDefaultSorting = () => {
    setCommentSorting('default');
  };

  const handleNewestSorting = () => {
    setCommentSorting('newest');
  };

  const handleOldestSorting = () => {
    setCommentSorting('oldest');
  };

  return (
    <View style={styles.mainContainer}>
      <Button label="Default" onPress={handleDefaultSorting} />
      <Button label="Newest" onPress={handleNewestSorting} />
      <Button label="Oldest" onPress={handleOldestSorting} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default TempSetting;
