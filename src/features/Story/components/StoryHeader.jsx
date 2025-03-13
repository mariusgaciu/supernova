import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { linkHelpers, getReadableDateFromUnix, stringHelpers } from '@utils';
import { HTMLRenderer } from '@libs';
import { Button, PressableOpacity, Separator } from '@components';
import { useStyles } from '@hooks';
import { Icon } from '@libs';

function StoryHeader({
  url,
  title,
  user,
  body,
  noOfComments,
  timestamp,
  score,
  type,
}) {
  const { defaultStyles } = useStyles();

  const domain = linkHelpers.getDomain(url);
  const titlePrefix = stringHelpers.getTitlePrefix(title);
  const titleWithoutPrefix = stringHelpers.removeTitlePrefix(title);
  const readableTime = getReadableDateFromUnix(timestamp);
  const isJobStory = type === 'job';

  console.log('STORY TYPE', type, isJobStory);

  const _handleTitlePress = () => {
    linkHelpers.openUrl(url);
    console.log(`Browse to ${domain}`);
  };

  const _handleUserPress = () => {
    console.log(`Navigate to ${user}'s profile.`);
  };

  const _handleVotePress = () => {
    console.log(`Upvote ${title}`);
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { borderColor: defaultStyles.primary.color },
        isJobStory && { marginBottom: 50 },
      ]}
    >
      {(!!domain || !!titlePrefix) && (
        <Text style={[defaultStyles.textSubdued, defaultStyles.caption1]}>
          <Text style={styles.domainText}>{domain}</Text>
          {domain && titlePrefix ? '  •  ' : ''}
          {titlePrefix}
        </Text>
      )}
      <View style={[styles.title]}>
        <PressableOpacity onPress={_handleTitlePress}>
          <Text style={[defaultStyles.textDefault, defaultStyles.title3]}>
            {titleWithoutPrefix}
            <View style={{ paddingBottom: 2, paddingLeft: 5 }}>
              <Icon name="external-link-fill" size={12} />
            </View>
          </Text>
        </PressableOpacity>
      </View>
      {!!body && <HTMLRenderer content={body} />}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsLeftContainer}>
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.textPlaceholder.color}
            label={user}
            icon={'person-circle-outline'}
            onPress={_handleUserPress}
          />
          {!isJobStory && (
            <Button
              variant={'icon-label'}
              size="small"
              labelColor={defaultStyles.textPlaceholder.color}
              label={noOfComments}
              icon={'chat-bubble-outline'}
              disabled
            />
          )}
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.textPlaceholder.color}
            label={readableTime}
            icon={'time-outline'}
            disabled
          />
        </View>
        {!isJobStory && (
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.textPlaceholder.color}
            label={score}
            icon={'arrow-up-circle-outline'}
            onPress={_handleVotePress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: '2%',
    rowGap: 8,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  domainText: {
    textDecorationLine: 'underline',
  },
  title: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsLeftContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
});

export default StoryHeader;
