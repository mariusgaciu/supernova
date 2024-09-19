import React, { memo, useMemo, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useStoreComments } from '../services/store';
import { Button } from '@components';
import { useStyles } from '@hooks';
import { HTMLRenderer } from '@libs';
import { getReadableDateFromUTC } from '@utils';

function CommentItem({
  id,
  user,
  depth,
  totalReplies,
  timestamp,
  comment,
  collapsedParent,
}) {
  const { setCommentCollapsed } = useStoreComments();

  const { defaultStyles } = useStyles();

  const time = getReadableDateFromUTC(timestamp);
  const isFirstLevel = depth === 0;
  const indentation = useMemo(() => [...Array(depth).keys()], [depth]);

  const handleUserPress = useCallback(() => {
    console.log(`Navigate to ${user}'s profile.`);
  }, []);

  const handleTimePress = useCallback(() => {
    console.log(`All comments until ${timestamp}`);
  }, []);

  const handleVotePress = useCallback(() => {
    console.log(`Comment has been voted.`);
  }, []);

  const handleReplyPress = useCallback(() => {
    console.log(`Comment has been replied.`);
  }, []);

  const handleSavePress = useCallback(() => {
    console.log(`Comment has been saved.`);
  }, []);

  const handleToggleCollapse = useCallback(() => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCommentCollapsed(id, !collapsedParent);
  }, [id, collapsedParent]);

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
          onPress={handleToggleCollapse}
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

        {!collapsedParent && (
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

// Custom comparison function for React.memo
function areEqual(prevProps, nextProps) {
  return (
    prevProps.id === nextProps.id &&
    prevProps.collapsedParent === nextProps.collapsedParent &&
    prevProps.totalReplies === nextProps.totalReplies &&
    prevProps.comment === nextProps.comment &&
    prevProps.depth === nextProps.depth
  );
}

export default memo(CommentItem, areEqual);
