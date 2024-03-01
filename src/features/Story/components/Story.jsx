import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PressableHighlight, PressableIconLabel } from '@components';
import {
  getDomain,
  getReadableDate,
  getTitlePrefix,
  removeTitlePrefix,
} from '@utils';
import { SCREEN_NAME } from '@config';
import { useStyles } from '@hooks';

function Story({
  index,
  id,
  url,
  title,
  user,
  noOfComments,
  timestamp,
  score,
  lastRefreshed,
}) {
  const { defaultStyles } = useStyles();
  const navigation = useNavigation();

  const domain = getDomain(url);
  const time = getReadableDate(timestamp);
  const titlePrefix = getTitlePrefix(title);
  const titleWithoutPrefix = removeTitlePrefix(title);

  const handleStoryPress = () => {
    // TODO: Long press, give
    navigation.navigate(SCREEN_NAME.STORY, { id });
    console.log(`Navigate to story ${id}.`);
  };

  const handleUserPress = () => {
    console.log(`Navigate to ${user}'s profile.`);
  };
  const handleCommentPress = () => {
    // TODO: FUTURE - Pressing on this would navigate to story screen with reply comment/keyboard open.
    console.log(`Navigate to story ${id}.`);
  };
  const handleStarPress = () => {
    console.log(`Story ${id} has been upvoted.`);
  };

  return (
    <View style={styles.mainContainer}>
      <PressableHighlight
        style={styles.pressableContainer}
        underlayColor={defaultStyles.bgSecondary}
        onPress={handleStoryPress}
      >
        <View style={[styles.subheader]}>
          <View style={[styles.positionContainer, defaultStyles.borderInfo]}>
            {/* TODO: Remove position for any screen where this is not relevant (eg - new) */}
            <Text
              style={[defaultStyles.lbPrimary, defaultStyles.brandCaption2]}
            >
              {index + 1}
            </Text>
          </View>
          <Text
            style={[
              styles.domainText,
              defaultStyles.lbSecondary,
              defaultStyles.caption2,
            ]}
          >
            {domain}
          </Text>
          {/* TODO: Add PressableOpacity to this, when tapped should filter all stories with that domain. */}
          <Text style={[defaultStyles.lbSecondary, defaultStyles.caption2]}>
            {domain && titlePrefix ? '  •  ' : ''}
            {titlePrefix}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[defaultStyles.lbPrimary, defaultStyles.header]}>
            {titleWithoutPrefix}
          </Text>
        </View>
        <View style={styles.detailsWrapper}>
          <View style={styles.detailsSectionLeft}>
            {/* TODO: Navigate to user profile */}
            <PressableIconLabel
              icon={'person-circle-outline'}
              label={user}
              onPress={handleUserPress}
            />
            {/* TODO: Navigate to story with keyboard active */}
            <PressableIconLabel
              icon={'chat-bubble-outline'}
              label={noOfComments}
              onPress={handleCommentPress}
            />
            {/* TODO: Not for MVP, but when user taps the time, all stories should be filtered between now and tapped time. */}
            <PressableIconLabel icon={'time-outline'} label={time} disabled />
          </View>
          <View>
            {/* TODO: This should be its own component with state on the icon star fill. Down the line add animation to the star. */}
            <PressableIconLabel
              icon={'star-outline'}
              label={score}
              onPress={handleStarPress}
            />
          </View>
        </View>
      </PressableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '1%',
  },
  pressableContainer: {
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    borderRadius: 12,
  },
  subheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionContainer: {
    marginRight: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 4,
    borderWidth: 1,
  },
  domainText: {
    textDecorationLine: 'underline',
  },
  titleContainer: {
    paddingTop: 6,
    paddingBottom: 10,
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsSectionLeft: {
    flexDirection: 'row',
    columnGap: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  detailsContainerLast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 0,
  },
  detailsText: {
    paddingLeft: 4,
  },
});

export default memo(Story);
