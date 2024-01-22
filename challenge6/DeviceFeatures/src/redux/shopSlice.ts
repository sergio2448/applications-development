import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import categories_data from '../data/categories_data.json';
import products_data from '../data/products_data.json';

interface ShopState {
  categorySelected: string;
  productIdSelected: number;
  categories: string[];
  products: any[];
  productsFilteredByCategory: any[];
}

const initialState: ShopState = {
  categorySelected: '',
  productIdSelected: 0,
  categories: categories_data,
  products: products_data,
  productsFilteredByCategory: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategorySelected: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
      state.productsFilteredByCategory = state.products.filter(
        (product) => product.category === state.categorySelected
      );
    },
    setProductIdSelected: (state, action: PayloadAction<number>) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
