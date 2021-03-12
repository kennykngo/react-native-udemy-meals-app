import React from 'react';

import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  // will search through each categoryIds[] and check if the indexOf (catId) exists
  // RETURNS a new array with the filtered elements
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
