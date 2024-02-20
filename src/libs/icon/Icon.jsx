import React from 'react';
import {
  DiceOutline,
  NewspaperFill,
  NewspaperOutline,
  NotificationsFill,
  NotificationsOutline,
  PersonCircleOutline,
  PersonFill,
  PersonOutline,
  SearchFill,
  SearchOutline,
} from '@assets';

import { useTheme } from '@hooks';

const icons = {
  'dice-outline': DiceOutline,
  'newspaper-fill': NewspaperFill,
  'newspaper-outline': NewspaperOutline,
  'notifications-fill': NotificationsFill,
  'notifications-outline': NotificationsOutline,
  'person-circle-outline': PersonCircleOutline,
  'person-fill': PersonFill,
  'person-outline': PersonOutline,
  'search-fill': SearchFill,
  'search-outline': SearchOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 * @param {Object} props
 * @param { 'newspaper-fill' | 'newspaper-outline' | 'notifications-fill' | 'notifications-outline' | 'person-circle-outline' | 'person-fill' | 'person-outline' | 'search-fill' | 'search-outline' } props.name - The type of message to retrieve.
 * @param {number} props.size - The size of the icon in pixels.
 * @param {string} props.color - The color of the icon.
 */
const Icon = ({ name = 'dice-outline', size = 18, color }) => {
  const { defaultStyles } = useTheme();

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
