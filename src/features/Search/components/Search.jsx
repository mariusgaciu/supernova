import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SearchInput from './SearchInput';
import { KeyboardAvoidingView } from '@components';

function Search(props) {
  return (
    <KeyboardAvoidingView>
      <View style={styles.mainContainer}>
        <Text>HEY</Text>
        <SearchInput style={styles.searchInput} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  searchInput: {},
});

export default Search;
