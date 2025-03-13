import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SearchInput from '../components/SearchInput';
import { KeyboardAvoidingView } from '@components';
import { Icon } from '@libs';
import { useStyles } from '@hooks';

function SearchScreen(props) {
  const { defaultStyles } = useStyles();

  return (
    <KeyboardAvoidingView>
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <Icon
              name="search-outline"
              color={defaultStyles.tertiary.color}
              size={70}
            />
          </View>
          <Text
            style={[
              styles.infoText,
              defaultStyles.lbSecondary,
              defaultStyles.header,
            ]}
          >
            Search for stories, users, jobs and more...
          </Text>
        </View>
        <SearchInput style={styles.searchInput} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '15%',
  },
  iconContainer: {
    marginBottom: 30,
  },
  infoText: {
    textAlign: 'center',
  },
});

export default SearchScreen;
