import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import { useStoreOptions } from '@services';

export const linkHelpers = {
  getDomain: (link) => {
    let hostname = '';

    if (link) {
      const domain = new URL(link);
      hostname = domain.hostname.replace('www.', '');
    }

    return hostname;
  },
  openUrl: async (url) => {
    const { openLinkWith } = useStoreOptions.getState().options;
    if (openLinkWith) {
      await Linking.openURL(url);
    } else {
      await WebBrowser.openBrowserAsync(url);
    }
  },
};
