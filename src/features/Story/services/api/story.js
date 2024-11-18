export const getStory = async ({ storyId }) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    );

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
  try {
    const response = await fetch(
      `http://hn.algolia.com/api/v1/items/${storyId}`
    );

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
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/${storyType}.json`
    );

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
