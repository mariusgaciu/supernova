export const getTitlePrefix = (title) => {
  const prefixes = ['Ask HN', 'Show HN', 'Tell HN'];

  const prefix = prefixes.find((prefix) => title.startsWith(prefix));

  return prefix;
};

export const removeTitlePrefix = (title) => {
  const prefixes = ['Ask HN: ', 'Show HN: ', 'Tell HN: '];

  const prefixFound = prefixes.find((prefix) => title.startsWith(prefix));
  const titleWithoutPrefix = prefixFound
    ? title.slice(prefixFound.length)
    : title;

  return titleWithoutPrefix;
};
