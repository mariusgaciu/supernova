import * as ExpoWebBrowser from 'expo-web-browser';

export const WebBrowser = {
  openAsync: (url) => {
    return ExpoWebBrowser.openBrowserAsync(url);
  },
  openAuthAsync: (url) => {
    return ExpoWebBrowser.openAuthSessionAsync(url);
  },
};
