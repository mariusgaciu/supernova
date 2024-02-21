export const getDomain = (link) => {
  const domain = new URL(link);
  const hostname = domain.hostname.replace('www.', '');

  return hostname;
};
