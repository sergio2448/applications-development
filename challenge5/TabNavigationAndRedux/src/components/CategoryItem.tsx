import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../redux/shopSlice';
import Card from './Card';

interface CategoryItemProps {
  category: string;
  navigation: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  navigation,
}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('products', { category });
        dispatch(setCategorySelected(category));
      }}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 15,
  },
});
