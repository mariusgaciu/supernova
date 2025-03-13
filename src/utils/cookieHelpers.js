import { Cookies } from '@libs';

export const cookieHelpers = {
  checkCookieValid: async (url) => {
    try {
      const cookie = await Cookies.get(url);

      // HN uses 'user' cookie for authentication
      const userCookie = cookie?.user;

      // Check if cookie is correctly set
      if (!userCookie) {
        console.log('No user cookie found');
        return false; // Cookie is not valid
      }

      // Check if cookie is expired
      if (userCookie.expires) {
        const expiryDate = new Date(userCookie.expires);
        if (expiryDate < new Date()) {
          console.log('Cookie expired at: ', expiryDate);
          return false; // Cookie is not valid
        }
      }

      return true; // Cookie is valid
    } catch (error) {
      console.error('Error checking cookie validity', error);
      return false; // Cookie is not valid
    }
  },
  fetchWithCookies: async (url, options = {}) => {
    const domain = new URL(url).hostname;
  },
};
