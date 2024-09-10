import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

import { useStoreOptions } from '@services';
import { Button } from '@components';
import { useStyles } from '@hooks';

function TempSetting(props) {
  const { defaultStyles } = useStyles();

  const { options, setCommentSorting, setOpenLinkWith } = useStoreOptions();

  const [isEnabled, setIsEnabled] = useState(options.openLinkWith);
  const toggleSwitch = () => {
    setOpenLinkWith(!options.openLinkWith);
    setIsEnabled((previousState) => !previousState);
  };

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={defaultStyles.lbPrimary}>Comment Sorting</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button label="Default" onPress={handleDefaultSorting} />
          <Button label="Newest" onPress={handleNewestSorting} />
          <Button label="Oldest" onPress={handleOldestSorting} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={defaultStyles.lbPrimary}>Default Browser</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
  },
});

export default TempSetting;
