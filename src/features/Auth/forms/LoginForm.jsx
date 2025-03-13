import React from 'react';
import { StyleSheet, View } from 'react-native';

import { INPUT_PLACEHOLDERS } from '@config';
import { Input } from '@components';
import { Icon } from '@libs';

function LoginForm(props) {
  return (
    <View style={styles.mainContainer}>
      <Input
        icon={
          <Icon name="person-outline" color={defaultStyles.lbTertiary.color} />
        }
        autoCapitalize={false}
        placeholder={INPUT_PLACEHOLDERS.USERNAME}
      />
      <Input
        icon={
          <Icon
            name="lock-closed-outline"
            color={defaultStyles.lbTertiary.color}
          />
        }
        placeholder={INPUT_PLACEHOLDERS.PASSWORD}
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default LoginForm;
