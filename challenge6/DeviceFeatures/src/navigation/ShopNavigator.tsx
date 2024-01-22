import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import Header from '../components/Header';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

type RootStackParamList = {
  Categorías: undefined;
  products: { categoryId: number };
  Detalle: { productId: number };
};

type CategoriesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Categorías'
>;
type ProductsByCategoryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'products'
>;
type ProductDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detalle'
>;

type Props = {
  navigation:
    | CategoriesScreenNavigationProp
    | ProductsByCategoryScreenNavigationProp
    | ProductDetailScreenNavigationProp;
  route: { name: keyof RootStackParamList };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ShopNavigator: React.FC = () => {
  const screenOptions = ({
    navigation,
    route,
  }: Props): NativeStackNavigationOptions => ({
    header: () => <Header title={route.name} navigation={navigation} />,
  });

  return (
    <Stack.Navigator
      initialRouteName="Categorías"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Categorías" component={CategoriesScreen} />
      <Stack.Screen
        name="products"
        component={ProductsByCategoryScreen}
        options={{ title: 'Productos' }}
      />
      <Stack.Screen name="Detalle" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
