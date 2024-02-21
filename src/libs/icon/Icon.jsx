import React from 'react';
import {
  CaretUpOutline,
  ChatBoxOutline,
  ChatBubbleOutline,
  DiceOutline,
  FitnessOutline,
  HeartOutline,
  NewspaperFill,
  NewspaperOutline,
  NotificationsFill,
  NotificationsOutline,
  PersonCircleOutline,
  PersonFill,
  PersonOutline,
  SearchFill,
  SearchOutline,
  TimeOutline,
} from '@assets';

import { useStyles } from '@hooks';

const icons = {
  'caret-up-outline': CaretUpOutline,
  'chat-box-outline': ChatBoxOutline,
  'chat-bubble-outline': ChatBubbleOutline,
  'dice-outline': DiceOutline,
  'fitness-outline': FitnessOutline,
  'heart-outline': HeartOutline,
  'newspaper-fill': NewspaperFill,
  'newspaper-outline': NewspaperOutline,
  'notifications-fill': NotificationsFill,
  'notifications-outline': NotificationsOutline,
  'person-circle-outline': PersonCircleOutline,
  'person-fill': PersonFill,
  'person-outline': PersonOutline,
  'search-fill': SearchFill,
  'search-outline': SearchOutline,
  'time-outline': TimeOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 * @param {Object} props
 * @param { "caret-up-outline" | 'chat-box-outline' | 'chat-bubble-outline' | 'fitness-outline' | 'heart-outline' | 'newspaper-fill' | 'newspaper-outline' | 'notifications-fill' | 'notifications-outline' | 'person-circle-outline' | 'person-fill' | 'person-outline' | 'search-fill' | 'search-outline' | 'time-outline' } props.name - The type of message to retrieve.
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
      color={color ?? defaultStyles.lbPrimary.color}
    />
  );
};

export default Icon;
