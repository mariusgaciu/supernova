import React, { memo, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import { useStoreComments } from '../services/store';
import { Button } from '@components';
import { useStyles } from '@hooks';
import { HTMLRenderer } from '@libs';
import { getReadableDateFromUTC } from '@utils';

function CommentItem({ id, user, depth, totalReplies, timestamp, comment }) {
  const [collapsed, setCollapsed] = useState(false);
  const { comments, setCommentCollapsed } = useStoreComments();

  const { defaultStyles } = useStyles();

  // const anyCollapsed = comments.find((comment) => comment.id === id).collapsed;

  // console.log('COLLAPSED ', anyCollapsed, id);

  const time = getReadableDateFromUTC(timestamp);
  const isFirstLevel = depth === 0;
  const indentation = [...Array(depth).keys()];

  const handleUserPress = () => {
    console.log(`Navigate to ${user}'s profile.`);
  };

  const handleTimePress = () => {
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

  const toggleCollapse = () => {
    const startDate = new Date();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newState = !collapsed;
    setCollapsed(newState);
    setCommentCollapsed(id, newState);
    const endDate = new Date();
    const timeTaken = endDate - startDate;
    console.log(`Time taken to collapse: ${timeTaken}ms`);
  };

  // if (anyCollapsed) return null;

  return (
    <View style={[styles.mainContainer]}>
      {indentation.map((value, index) => (
        <View
          key={index}
          style={[
            styles.indentation,
            { backgroundColor: defaultStyles.primary.color },
            index > 0 && { marginLeft: 5 },
          ]}
        />
      ))}

      <View style={styles.commentWrapper}>
        <TouchableOpacity
          style={styles.topDetailsContainer}
          onPress={toggleCollapse}
        >
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
          <Text style={defaultStyles.lbPrimary}>
            {' '}
            Depth: {depth} ID: {id}
          </Text>
        </TouchableOpacity>

        {!collapsed && (
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
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 6,
    flexDirection: 'row',
  },
  indentation: {
    width: 1,
  },
  commentWrapper: {
    flex: 1,
  },
  topDetailsContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  commentContainer: {
    flexShrink: 1,
    paddingLeft: 6,
  },
  bottomDetailsContainer: {
    paddingVertical: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default memo(CommentItem);
