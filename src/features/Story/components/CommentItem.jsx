import React, { memo, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import { BUTTON_LABELS } from '@config';
import { Button } from '@components';
import { useStyles } from '@hooks';
import { HTMLRenderer } from '@libs';
import { getReadableDateFromUTC } from '@utils';

function CommentItem({
  id,
  user,
  depth,
  timestamp,
  comment,
  isCollapsed,
  onToggleCollapse,
}) {
  const { defaultStyles } = useStyles();

  const time = getReadableDateFromUTC(timestamp);
  const isFirstLevel = depth === 0;
  const indentation = useMemo(() => [...Array(depth).keys()], [depth]);
  const collapseLabel = isCollapsed ? 'Uncollapse' : 'Collapse';

  console.log('WHATABOUTME', id, isCollapsed);

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

  const handleToggleCollapse = () => {
    onToggleCollapse(id);
  };

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
            label={user + ' ' + id}
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
          <Button
            // variant={'icon-label'}
            size="small"
            labelColor={defaultStyles.lbTertiary.color}
            label={collapseLabel}
            icon={'time-outline'}
            onPress={handleToggleCollapse}
          />
        </View>
        {!isCollapsed && (
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
            </View>
          </View>
        )}
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

export default memo(CommentItem);
