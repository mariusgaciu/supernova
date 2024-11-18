import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PressableHighlight } from '@components';
import { Button } from '@components';
import { linkHelpers, getReadableDateFromUnix, stringHelpers } from '@utils';
import { SCREEN_NAME } from '@config';
import { useStyles } from '@hooks';

function StoryItem({
  index,
  storyId,
  url,
  title,
  user,
  noOfComments,
  timestamp,
  score,
  lastRefreshed,
  isJobStory,
}) {
  const { defaultStyles } = useStyles();
  const navigation = useNavigation();

  const domain = linkHelpers.getDomain(url);
  const time = getReadableDateFromUnix(timestamp);
  const titlePrefix = stringHelpers.getTitlePrefix(title);
  const titleWithoutPrefix = stringHelpers.removeTitlePrefix(title);

  const _handleStoryPress = () => {
    // TODO: Long press, give
    if (isJobStory) {
      linkHelpers.openUrl(url);
    } else {
      navigation.navigate(SCREEN_NAME.STORY, { storyId });
    }
    console.log(`Navigate to story ${storyId}`);
  };

  const _handleUserPress = () => {
    console.log(`Navigate to ${user}'s profile`);
  };

  const _handleCommentPress = () => {
    // TODO: FUTURE - Pressing on this would navigate to story screen with reply comment/keyboard open.
    console.log(`Navigate to story ${storyId}`);
  };

  const _handleTimePress = () => {
    // TODO: - Pressing this would filter all stories between the time of the story and present
    console.log(`All stories until ${timestamp}`);
  };

  const _handleVotePress = () => {
    console.log(`Story ${storyId} has been voted`);
  };

  return (
    <PressableHighlight
      style={styles.mainContainer}
      underlayColor={defaultStyles.bgSecondary}
      onPress={_handleStoryPress}
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
            onPress={_handleUserPress}
          />
          {!isJobStory && (
            <Button
              variant={'icon-label'}
              size="small"
              labelColor={defaultStyles.lbTertiary.color}
              label={noOfComments}
              icon={'chat-bubble-outline'}
              onPress={_handleCommentPress}
            />
          )}
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={time}
            icon={'time-outline'}
            onPress={_handleTimePress}
          />
        </View>
        <View>
          {!isJobStory && (
            <Button
              variant={'icon-label'}
              size="small"
              labelColor={defaultStyles.lbTertiary.color}
              label={score}
              icon={'arrow-up-circle-outline'}
              onPress={_handleVotePress}
            />
          )}
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
