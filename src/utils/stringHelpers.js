import { TITLE_PREFIXES } from '@config';

export const stringHelpers = {
  getTitlePrefix: (title) => {
    const prefixes = TITLE_PREFIXES;

    const prefix = prefixes.find((prefix) => title.startsWith(prefix));

    if (!prefix) return null;

    const prefixWithoutColon = title.slice(0, prefix.length).replace(':', '');

    return prefixWithoutColon;
  },
  removeTitlePrefix: (title) => {
    const prefixes = TITLE_PREFIXES;

    const prefixFound = prefixes.find((prefix) => title.startsWith(prefix));
    const titleWithoutPrefix = prefixFound
      ? title.slice(prefixFound.length).trim()
      : title;

    return titleWithoutPrefix;
  },
};
