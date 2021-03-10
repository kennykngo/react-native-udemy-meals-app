import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetail Screen!</Text>
      <Button
        title='Go back to Categories'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
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

export default MealDetailScreen;
