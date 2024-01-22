import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../components/ProductItem';
import Search from '../components/SearchItem';
import { RootState } from '../app/store';

const ProductsByCategoryScreen: React.FC<Props> = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');

  const category = useSelector(
    (state: RootState) => state.shopReducer.categorySelected
  );
  const productsFilteredByCategory = useSelector(
    (state: RootState) => state.shopReducer.productsFilteredByCategory
  );

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProductsByCategory(productsFiltered);
  }, [category, search]);

  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductItem product={item} navigation={navigation} />
  );

  const onSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <>
      <Search onSearchHandlerEvent={onSearch} />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ProductsByCategoryScreen;

const styles = StyleSheet.create({});

interface Props {
  navigation: any;
  route: any;
}

interface Product {
  id: string;
  title: string;
}
