import CookieManager from '@react-native-cookies/cookies';

const Cookies = {
  // Set cookies from a response header
  // This allows you to put the full string provided by a server's Set-Cookie
  // response header directly into the cookie store.
  set: async (url, cookie) => {
    try {
      const success = await CookieManager.setFromResponse(url, cookie);
      console.log('Cookies setting was successful', success);
    } catch (error) {
      console.error('Error setting cookies', error);
    }
  },

  // Get cookies for a url
  get: async (url) => {
    try {
      const cookies = await CookieManager.get(url);
      console.log('Cookies retrieval was successful', cookies);
      return cookies;
    } catch (error) {
      throw new Error('Error retrieving cookies', error);
    }
  },

  // Clear all cookies
  clearAll: async () => {
    try {
      const success = await CookieManager.clearAll();
      console.log('Cookies cleared successfully', success);
    } catch (error) {
      throw new Error('Error clearing cookies', error);
    }
  },
};

export default Cookies;
