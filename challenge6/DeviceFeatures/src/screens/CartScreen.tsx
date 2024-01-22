import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import cart_data from '../data/cart_data.json';
import CartItem from '../components/CardItem';

const CartScreen: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalCart = cart_data.reduce(
      (accumulator: number, currentItem: { price: number; quantity: number }) =>
        (accumulator += currentItem.price * currentItem.quantity),
      0
    );
    setTotal(totalCart);
  }, []);

  const renderCartItem = ({ item }: { item: { id: string } }) => (
    <CartItem item={item} />
  );

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: USD {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Karla-Bold',
  },
  confirmButton: {
    backgroundColor: '#0D0E0F',
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    color: '#fff',
  },
});
