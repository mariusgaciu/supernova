import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text>PROFILE SCREEN</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AUTH')}>
        <Text>GO TO AUTH</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default ProfileScreen;
