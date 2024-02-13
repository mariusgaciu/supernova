import React from 'react';
import {
  SVGDiceOutline,
  SVGNewspaperOutline,
  SVGNotificationsOutline,
  SVGPersonCircleOutline,
  SVGPersonOutline,
  SVGSearchOutline,
} from '@assets';

import { useTheme } from '@hooks';

const icons = {
  'dice-outline': SVGDiceOutline,
  'newspaper-outline': SVGNewspaperOutline,
  'notifications-outline': SVGNotificationsOutline,
  'person-circle-outline': SVGPersonCircleOutline,
  'person-outline': SVGPersonOutline,
  'search-outline': SVGSearchOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 * @param {Object} props
 * @param {"newspaper-outline" | "notifications-outline" | "person-circle-outline" | 'person-outline' | "search-outline" } props.name - The type of message to retrieve.
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
