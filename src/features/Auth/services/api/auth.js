import { BASE_URL } from '@config';
import CookieManager from '@react-native-cookies/cookies';

import { Cookies } from '@libs';

export const postLogin = async ({ username, password }) => {
  const url = `${BASE_URL.HN_WEB}/login`;
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: `goto=news&acct=${encodeURIComponent(
      username
    )}&pw=${encodeURIComponent(password)}`,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Network response not ok. Request: postLogin. Status: ${response.status}.`
      );
    }

    const htmlString = await response.text();

    console.log('htmlString', htmlString);

    if (htmlString.includes('Bad login.')) {
      console.log('Login failed.');
      throw new Error('Login failed.');
    }

    if (htmlString.includes('Validation required.')) {
      console.log('Validation required.');
      throw new Error('Validation required.');
    }

    CookieManager.get('https://news.ycombinator.com/').then((res) => {
      console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
    });

    return response;
  } catch (error) {
    // console.error(`Error fetching data. Request: postLogin. ${error}`);
    throw error;
  }
};
