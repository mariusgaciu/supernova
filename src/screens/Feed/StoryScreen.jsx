import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function StoryScreen({ route }) {
  const id = route.params.id;

  console.log('ID', id);

  return (
    <View style={styles.mainContainer}>
      <Text>StoryScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default StoryScreen;
