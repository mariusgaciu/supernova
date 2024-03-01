export const getStory = async ({ id }) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    if (!response.ok) {
      throw new Error('Network response not ok.');
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
      throw new Error('Network response not ok.');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data - ${error}`);
  }
};
