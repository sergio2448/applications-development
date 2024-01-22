import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setProductIdSelected } from '../redux/shopSlice';

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    thumbnail: string;
  };
  navigation: any;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, navigation }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setProductIdSelected(product.id));
    navigation.navigate('Detalle', product.id);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.containerProductItem}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProductItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  productTitle: {},
  productImage: {
    width: 60,
    height: 60,
  },
});
