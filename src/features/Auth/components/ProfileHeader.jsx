import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useStyles } from '@hooks';
import { Avatar } from '@libs';

function ProfileHeader({ username, joinDate, karma, about }) {
  const { defaultStyles } = useStyles();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Avatar name={username} size={100} />
        <View style={styles.userDetailsContainer}>
          <Text style={[defaultStyles.lbPrimary, defaultStyles.title2B]}>
            {username}
          </Text>
          <Text style={[defaultStyles.lbPrimary, defaultStyles.caption1]}>
            {joinDate} · {karma} Karma
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.aboutText,
          defaultStyles.lbPrimary,
          defaultStyles.subheaderB,
        ]}
      >
        About
      </Text>
      <Text style={[defaultStyles.lbPrimary, defaultStyles.caption1]}>
        {about}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  topContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  userDetailsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default ProfileHeader;
