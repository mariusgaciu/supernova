import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { linkHelpers, getReadableDateFromUnix, stringHelpers } from '@utils';
import { HTMLRenderer } from '@libs';
import { Button } from '@components';
import { useStyles } from '@hooks';

function StoryHeader({
  url,
  title,
  user,
  body,
  noOfComments,
  timestamp,
  score,
}) {
  const { defaultStyles } = useStyles();

  const domain = linkHelpers.getDomain(url);
  const titlePrefix = stringHelpers.getTitlePrefix(title);
  const titleWithoutPrefix = stringHelpers.removeTitlePrefix(title);
  const readableTime = getReadableDateFromUnix(timestamp);

  const handleUserPress = () => {
    console.log(`Navigate to ${user}'s profile.`);
  };

  const handleVotePress = () => {
    console.log(`Upvote ${title}`);
  };

  console.log('HEY', titlePrefix);

  return (
    <View
      style={[
        styles.mainContainer,
        { borderColor: defaultStyles.primary.color },
      ]}
    >
      {(!!domain || !!titlePrefix) && (
        <Text style={[defaultStyles.lbSecondary, defaultStyles.caption1]}>
          <Text style={styles.domainText}>{domain}</Text>
          {domain && titlePrefix ? '  •  ' : ''}
          {titlePrefix}
        </Text>
      )}
      <Text style={[defaultStyles.lbPrimary, defaultStyles.title3]}>
        {titleWithoutPrefix}
      </Text>
      {!!body && <HTMLRenderer content={body} />}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsLeftContainer}>
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
            disabled
          />
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={readableTime}
            icon={'time-outline'}
            disabled
          />
        </View>
        <Button
          variant={'icon-label'}
          size="small"
          labelColor={defaultStyles.lbTertiary.color}
          label={score}
          icon={'arrow-up-circle-outline'}
          onPress={handleVotePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: 4,
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
