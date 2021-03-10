import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
  // itemData (part of renderItem)
  // .item (one of the few properties of itemData object)
  // .title (shape of object created from category.js)
  return (
    <View>
      <Text> {itemData.item.title} </Text>
    </View>
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default CategoriesScreen;
