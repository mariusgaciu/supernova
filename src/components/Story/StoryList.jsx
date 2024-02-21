import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useTheme } from '@hooks';
import Story from './Story';

const stories = [
  {
    by: 'dhouston',
    descendants: 71,
    id: 8863,
    kids: [
      8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067,
      8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998,
      8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876,
    ],
    score: 111,
    time: 1674855351,
    title: 'My YC app: Dropbox - Throw away your USB drive',
    type: 'story',
    url: 'http://www.getdropbox.com/u/2/screencast.html',
  },
];

function StoryList(props) {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={stories}
        renderItem={({ index, item }) => (
          <Story
            key={item.id}
            index={index}
            url={item.url}
            title={item.title}
            user={item.by}
            noOfComments={item.descendants}
            timestamp={item.time}
            score={item.score}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default StoryList;
