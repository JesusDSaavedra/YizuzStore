import { createSlice } from '@reduxjs/toolkit';

export const yizuzSlice = createSlice({
   name: 'yizuz',
   initialState: {
      typeProductStore: 'ROPA',
      favorites: [],
      myBag: []
   },
   reducers: {
      setType: (state, { payload } ) => {
         state.typeProductStore = payload;
      },
      addFavorites: ( state, action ) => {
         state.favorites.push( action.payload );
      },
      addProductToMyBag: ( state, action ) => {
         state.myBag.push( action.payload );
      },
      deleteProductFromMyBagById: ( state, action ) => {
         state.myBag = state.myBag.filter((bag) => bag.id  !== action.payload )
      },
   }
});


// Action creators are generated for each case reducer function
export const { setType, addFavorite, addToMyBag } = yizuzSlice.actions;