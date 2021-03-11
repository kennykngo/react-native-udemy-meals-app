import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(mealId, selectedMeal);

  return (
    <View style={styles.screen}>
      {/* <Text>{selectedMeal.title}</Text> */}
      <Button
        title='Go back to Categories'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('MealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  console.log(selectedMeal);

  // return {
  //   // headerTitle: selectedMeal.title,
  // };
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MealDetailScreen;
