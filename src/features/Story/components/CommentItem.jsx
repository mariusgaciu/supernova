import React, { memo, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import { BUTTON_LABELS } from '@config';
import { useStoreComments } from '../services/store';
import { Button } from '@components';
import { useStyles } from '@hooks';
import { HTMLRenderer } from '@libs';
import { getReadableDateFromUTC } from '@utils';

function CommentItem({
  id,
  user,
  depth,
  noOfReplies,
  timestamp,
  comment,
  childrenIds,
  directChildrenIds,
}) {
  const { getCommentStore, setCommentsCollapsed, setCommentChildrenCollapsed } =
    useStoreComments();

  const useStoreComment = getCommentStore(id);
  const { collapsed, collapsedChildren } = useStoreComment();

  const { defaultStyles } = useStyles();

  const time = getReadableDateFromUTC(timestamp);
  const isFirstLevel = depth === 0;
  const indentation = useMemo(() => [...Array(depth).keys()], [depth]);
  const isCommentCollapsedDisabled = noOfReplies === 0;

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

  const handleToggleCollapsedComments = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCommentChildrenCollapsed(id, !collapsedChildren);
    if (collapsedChildren) {
      setCommentsCollapsed(directChildrenIds, !collapsedChildren);
    } else if (!collapsedChildren) {
      setCommentsCollapsed(childrenIds, !collapsedChildren);
    }
  };

  if (collapsed) return null;

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
        <View style={styles.topDetailsContainer}>
          <Button
            variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={
              user + ' - ' + id + ' ' + collapsed + ' ' + collapsedChildren
            }
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
        </View>

        <View style={[styles.commentContainer]}>
          <HTMLRenderer content={comment} />
          <View style={styles.bottomDetailsContainer}>
            <Button
              variant={isFirstLevel ? 'icon-label' : 'icon'}
              size="small"
              labelColor={defaultStyles.lbTertiary.color}
              label={BUTTON_LABELS.SAVE}
              icon={'bookmark-outline'}
              onPress={handleSavePress}
            />
            <Button
              variant={isFirstLevel ? 'icon-label' : 'icon'}
              size="small"
              labelColor={defaultStyles.lbTertiary.color}
              label={BUTTON_LABELS.REPLY}
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
            <Button
              variant={'icon-label'}
              size="small"
              labelColor={defaultStyles.lbTertiary.color}
              disabledLabelColor={defaultStyles.lbQuaternary.color}
              label={noOfReplies}
              icon={'chat-bubble-outline'}
              disabled={isCommentCollapsedDisabled}
              onPress={handleToggleCollapsedComments}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 6,
    flexDirection: 'row',
  },
  mainContainerCollapsed: {
    height: 0,
  },
  indentation: {
    width: 1,
  },
  commentWrapper: {
    flex: 1,
  },
  topDetailsContainer: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topDetailsLeft: {
    flex: 1,
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

export default memo(CommentItem);
