import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CategoryItem from '../components/CategoryItem';
import { RootState } from '../app/store';

const CategoriesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const categories = useSelector(
    (state: RootState) => state.shopReducer.categories
  );

  const renderCategoryItem = ({ item }: { item: string }) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return (
    <View>
      <FlatList
        style={styles.categories}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categories: {
    marginBottom: 90,
  },
});
