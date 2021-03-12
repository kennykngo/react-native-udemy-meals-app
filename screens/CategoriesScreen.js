import React from 'react';
import { Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Color';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    // itemData (part of renderItem)
    // .item (one of the few properties of itemData object)
    // .title (shape of object created from category.js)
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  console.log(navData);

  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            // console.log(navData);
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
