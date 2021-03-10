import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default FiltersScreen;
