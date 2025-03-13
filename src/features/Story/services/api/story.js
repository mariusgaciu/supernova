export const getStory = async ({ storyId }) => {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Network response not ok. - Story ID: ${storyId} - Fetching: getStory`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data - ${error}`);
  }
};

export const getStoryDetails = async ({ storyId }) => {
  const url = `http://hn.algolia.com/api/v1/items/${storyId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Network response not ok. - Story ID: ${storyId} - Fetching: getStoryDetails`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data - ${error}`);
  }
};

export const getStories = async ({ storyType }) => {
  const url = `https://hacker-news.firebaseio.com/v0/${storyType}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Network response not ok. - Story ID: ${storyTypec} - Fetching: getStories`
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data - ${error}`);
  }
};
