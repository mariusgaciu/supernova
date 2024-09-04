import React, { memo, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from 'react-native';

import { Button, Separator } from '@components';
import { useStyles } from '@hooks';
import { HTMLRenderer } from '@libs';
import { countRecursiveItems, getReadableDateFromUTC } from '@utils';

function CommentItem({
  user,
  depth,
  totalReplies,
  nestedComments = [],
  nestedLevel,
  timestamp,
  comment,
}) {
  const { width } = useWindowDimensions();
  const marginLeft = nestedLevel * (width * 0.02);

  // const totalReplies = countRecursiveItems(nestedComments);

  const { defaultStyles } = useStyles();

  const time = getReadableDateFromUTC(timestamp);
  const isFirstLevel = nestedLevel === 0;

  const handleUserPress = () => {
    // TODO: Add navigation to profile.
    console.log(`Navigate to ${user}'s profile.`);
  };

  const handleTimePress = () => {
    // TODO: - Pressing this would filter all comments between the time of the story and present
    console.log(`All comments until ${timestamp}`);
  };

  const handleVotePress = () => {
    console.log(`Comment has been voted.`);
  };

  const handleReplyPress = () => {
    console.log(`Comment has been replied.`);
  };

  const handleSavePress = () => {
    console.log(`Comment has been saved.`);
  };

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <CommentItem
        nestedLevel={nestedLevel + 1}
        user={item.author}
        totalReplies={item.number_of_replies}
        timestamp={item.created_at}
        nestedComments={item.children}
        comment={item.text}
      />
    ),
    []
  );

  return (
    <View
      style={[
        isFirstLevel && styles.mainContainer,
        !isFirstLevel && {
          ...styles.mainContainerNested,
          borderColor: defaultStyles.primary.color,
        },
      ]}
    >
      <View style={styles.topDetailsContainer}>
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
          label={time}
          icon={'time-outline'}
          onPress={handleTimePress}
        />
        <Text style={defaultStyles.lbPrimary}>{totalReplies}</Text>
        <Text style={defaultStyles.lbPrimary}> Depth: {depth}</Text>
      </View>
      <View style={[styles.commentContainer]}>
        <HTMLRenderer content={comment} />
        <View style={styles.bottomDetailsContainer}>
          <Button
            variant={isFirstLevel ? 'icon-label' : 'icon'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={'Save'}
            icon={'bookmark-outline'}
            onPress={handleSavePress}
          />
          <Button
            variant={isFirstLevel ? 'icon-label' : 'icon'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={'Reply'}
            icon={'arrow-undo-outline'}
            onPress={handleReplyPress}
          />
          <Button
            variant={isFirstLevel ? 'icon-label' : 'icon'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={'Vote'}
            icon={'arrow-up-circle-outline'}
            onPress={handleVotePress}
          />
        </View>
        {nestedComments.length > 0 && (
          <FlatList
            data={nestedComments}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 6,
  },
  mainContainerNested: {
    borderLeftWidth: 1,
  },
  topDetailsContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  commentContainer: {
    paddingLeft: 5,
  },
  bottomDetailsContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default memo(CommentItem);
