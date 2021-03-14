import { MEALS } from '../../data/dummy-data';

// Application will start with an empty state
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

// state is DEFAULTed as 'initialState' variable
const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
