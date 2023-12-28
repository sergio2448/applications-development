import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../components/Header';
import CartScreen from '../screens/CartScreen';

type RootStackParamList = {
  Carrito: undefined;
};

type CartNavigatorProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Carrito'>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const CartNavigator: React.FC<CartNavigatorProps> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={({ route }) => ({
        header: () => <Header title={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Carrito" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
