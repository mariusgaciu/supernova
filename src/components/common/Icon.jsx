import React from 'react';
import {
  SVGDiceOutline,
  SVGNewspaperOutline,
  SVGNotificationsOutline,
  SVGPersonCircleOutline,
  SVGSearchOutline,
} from '@assets';

const icons = {
  'dice-outline': SVGDiceOutline,
  'newspaper-outline': SVGNewspaperOutline,
  'notifications-outline': SVGNotificationsOutline,
  'person-circle-outline': SVGPersonCircleOutline,
  'search-outline': SVGSearchOutline,
};

/**
 * Get an SVG icon based on the given name, size, and color.
 *
 * @param {"newspaper-outline" | "notifications-outline" | "person-circle-outline" | "search-outline" } name - The type of message to retrieve.
 * @param {number} size - The size of the icon in pixels.
 * @param {string} color - The color of the icon.
 */
const Icon = ({ name = 'dice-outline', size, color = '#586875' }) => {
  const SVGIcon = icons[name];

  return <SVGIcon height={size} width={size} color={color} />;
};

export default Icon;
