export const getDomain = (link) => {
  let hostname = '';

  if (link) {
    const domain = new URL(link);
    hostname = domain.hostname.replace('www.', '');
  }

  return hostname;
};
