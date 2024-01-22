import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import products_data from '../data/products_data.json';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProductDetailScreenProps {
  route: {
    params: number;
  };
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
  const [productSelected, setProductSelected] = useState<Product>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const { height, width } = useWindowDimensions();

  const productId = route.params;

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true);
  }, [height]);

  useEffect(() => {
    const productFound = products_data.find(
      (product: Product) => product.id === productId
    );
    setProductSelected(productFound);
    setIsLoading(false);
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <ScrollView>
            <Image
              source={{ uri: productSelected.images[0] }}
              resizeMode="cover"
              style={
                isPortrait ? styles.imageProduct : styles.imageProductLandscape
              }
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>
                {productSelected.description}
              </Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <TouchableOpacity
                style={isPortrait ? styles.buyButton : styles.buyAlt}
                onPress={() => null}
              >
                <Text style={styles.buyText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Karla-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Karla-regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Karla-Bold',
    fontSize: 32,
    color: '#0D0F0E',
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buyText: {
    color: '#fff',
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
  },
});
