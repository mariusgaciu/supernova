import React from 'react';
import {
  SVGDiceOutline,
  SVGNewspaperFill,
  SVGNewspaperOutline,
  SVGNotificationsFill,
  SVGNotificationsOutline,
  SVGPersonCircleOutline,
  SVGPersonFill,
  SVGPersonOutline,
  SVGSearchFill,
  SVGSearchOutline,
} from '@assets';

import { useTheme } from '@hooks';

const icons = {
  'dice-outline': SVGDiceOutline,
  'newspaper-fill': SVGNewspaperFill,
  'newspaper-outline': SVGNewspaperOutline,
  'notifications-fill': SVGNotificationsFill,
  'notifications-outline': SVGNotificationsOutline,
  'person-circle-outline': SVGPersonCircleOutline,
  'person-fill': SVGPersonFill,
  'person-outline': SVGPersonOutline,
  'search-fill': SVGSearchFill,
  'search-outline': SVGSearchOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 * @param {Object} props
 * @param { 'newspaper-fill' | 'newspaper-outline' | 'notifications-fill' | 'notifications-outline' | 'person-circle-outline' | 'person-fill' | 'person-outline' | 'search-fill' | 'search-outline' } props.name - The type of message to retrieve.
 * @param {number} props.size - The size of the icon in pixels.
 * @param {string} props.color - The color of the icon.
 */
const Icon = ({ name = 'dice-outline', size = 18, color }) => {
  const { theme } = useTheme();

  const SVGIcon = icons[name];

  return (
    <SVGIcon
      height={size}
      width={size}
      color={color ?? theme.lbPrimary.color}
    />
  );
};

export default Icon;
