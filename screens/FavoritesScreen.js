import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default FavoritesScreen;
