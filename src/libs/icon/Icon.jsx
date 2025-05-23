import React from 'react';
import {
  ArrowUndoOutline,
  ArrowUpCircleFill,
  ArrowUpCircleOutline,
  ArrowUpOutline,
  BookmarkOutline,
  CaretUpOutline,
  ChatBoxOutline,
  ChatBubbleOutline,
  ChevronCollapseOutline,
  ChevronExpandOutline,
  CloseCircleOutline,
  DiceOutline,
  ExternalLinkFill,
  ExternalLinkOutline,
  EyeOffOutline,
  EyeOutline,
  FitnessOutline,
  HeartOutline,
  LockedClosedOutline,
  MaximizeOutline,
  MinimiseOutline,
  NewspaperFill,
  NewspaperOutline,
  NotificationsFill,
  NotificationsOutline,
  PersonCircleOutline,
  PersonFill,
  PersonOutline,
  SearchFill,
  SearchOutline,
  StarFill,
  StarOutline,
  TimeOutline,
} from '@assets';

import { useStyles } from '@hooks';

const icons = {
  'arrow-undo-outline': ArrowUndoOutline,
  'arrow-up-circle-fill': ArrowUpCircleFill,
  'arrow-up-circle-outline': ArrowUpCircleOutline,
  'arrow-up-outline': ArrowUpOutline,
  'bookmark-outline': BookmarkOutline,
  'caret-up-outline': CaretUpOutline,
  'chat-box-outline': ChatBoxOutline,
  'chat-bubble-outline': ChatBubbleOutline,
  'chevron-collapse-outline': ChevronCollapseOutline,
  'chevron-expand-outline': ChevronExpandOutline,
  'close-circle-outline': CloseCircleOutline,
  'dice-outline': DiceOutline,
  'external-link-fill': ExternalLinkFill,
  'external-link-outline': ExternalLinkOutline,
  'eye-off-outline': EyeOffOutline,
  'eye-outline': EyeOutline,
  'fitness-outline': FitnessOutline,
  'heart-outline': HeartOutline,
  'lock-closed-outline': LockedClosedOutline,
  'maximize-outline': MaximizeOutline,
  'minimize-outline': MinimiseOutline,
  'newspaper-fill': NewspaperFill,
  'newspaper-outline': NewspaperOutline,
  'notifications-fill': NotificationsFill,
  'notifications-outline': NotificationsOutline,
  'person-circle-outline': PersonCircleOutline,
  'person-fill': PersonFill,
  'person-outline': PersonOutline,
  'search-fill': SearchFill,
  'search-outline': SearchOutline,
  'star-fill': StarFill,
  'star-outline': StarOutline,
  'time-outline': TimeOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 * @param {Object} props
 * @param { 'bookmark-outline' | 'arrow-undo-outline' | 'arrow-up-circle-fill' | 'arrow-up-circle-outline' | 'arrow-up-outline' | 'caret-up-outline' | 'chat-box-outline' | 'chat-bubble-outline' | 'chevron-collapse-outline' | 'chevron-expand-outline' | 'close-circle-outline' | 'external-link-fill' | 'external-link-outline' | 'eye-off-outline' | 'eye-outline' | 'fitness-outline' | 'heart-outline' | 'lock-closed-outline' | 'maximize-outline' | 'minimize-outline' | 'newspaper-fill' | 'newspaper-outline' | 'notifications-fill' | 'notifications-outline' | 'person-circle-outline' | 'person-fill' | 'person-outline' | 'search-fill' | 'search-outline' | 'star-fill' | 'star-outline' | 'time-outline' } props.name - The type of message to retrieve.
 * @param {number} props.size - The size of the icon in pixels.
 * @param {string} props.color - The color of the icon.
 */
const Icon = ({ name = 'dice-outline', size = 18, color }) => {
  const { defaultStyles } = useStyles();

  const SVGIcon = icons[name];

  return (
    <SVGIcon
      height={size}
      width={size}
      color={color ?? defaultStyles.textDefault.color}
    />
  );
};

export default Icon;
