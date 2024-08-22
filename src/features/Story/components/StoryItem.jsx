import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PressableHighlight, PressableIconLabel } from '@components';
import { Button } from '@components';
import {
  getDomain,
  getReadableDateFromUnix,
  getTitlePrefix,
  removeTitlePrefix,
} from '@utils';
import { SCREEN_NAME } from '@config';
import { useStyles } from '@hooks';

function StoryItem({
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
  const time = getReadableDateFromUnix(timestamp);
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

  const handleTimePress = () => {
    // TODO: - Pressing this would filter all stories between the time of the story and present
    console.log(`All stories until ${timestamp}`);
  };

  const handleUpvotePress = () => {
    console.log(`Story ${id} has been upvoted.`);
  };

  return (
    <PressableHighlight
      style={styles.mainContainer}
      underlayColor={defaultStyles.bgSecondary}
      onPress={handleStoryPress}
    >
      <View style={[styles.subheader]}>
        <View style={[styles.positionContainer, defaultStyles.borderInfo]}>
          <Text style={[defaultStyles.lbPrimary, defaultStyles.brandCaption2]}>
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
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={user}
            icon={'person-circle-outline'}
            onPress={handleUserPress}
          />
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={noOfComments}
            icon={'chat-bubble-outline'}
            onPress={handleCommentPress}
          />
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={time}
            icon={'time-outline'}
            onPress={handleTimePress}
          />
        </View>
        <View>
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={score}
            icon={'arrow-up-circle-outline'}
            onPress={handleUpvotePress}
          />
        </View>
      </View>
    </PressableHighlight>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
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

export default memo(StoryItem);
