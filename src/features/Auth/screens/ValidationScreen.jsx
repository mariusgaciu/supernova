import React, { useState } from 'react';
import { View } from 'react-native';

import { ActivityIndicator } from '@components';
import { BASE_URL, URL } from '@config';
import WebView from 'react-native-webview';

function ValidationScreen() {
  const [isLoadingWebView, setIsLoadingWebView] = useState(true);

  // This function will be called on navigation state changes
  const _handleNavigationStateChange = async (navState) => {
    if (navState.url === URL.NEWS && !navState.loading) {
      // Retrieve cookies
      const cookies = await CookieManager.get(BASE_URL.HN_WEB);
      if (cookies) {
        console.log('Retrieved cookies:', cookies);
      }
    }
  };
  return (
    <View>
      {isLoadingWebView && <ActivityIndicator />}
      <WebView
        source={{ uri: URL.LOGIN_REDIRECT }}
        onLoadEnd={() => setIsLoadingWebView(false)}
        onNavigationStateChange={_handleNavigationStateChange}
        sharedCookiesEnabled={true}
      />
    </View>
  );
}

export default ValidationScreen;
