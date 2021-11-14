import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // tomamos el valor que fué mandado
      const duplicate = state.value.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      ); // buscamos en el estado si el producto enviado existe dentro del estado
			// si existe entonces ...
      if (duplicate.length > 0) {
				// agregamos al estado todo lo diferente al nuevo item
        state.value = state.value.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
				// hacemos la copia para que permanezca todo lo qu estaba
        state.value = [
          ...state.value,
					// tomamos el id del encontrado y anexamos los valores nuevos, junto con el contador
          {
            id: duplicate[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
				// si duplicate es menor que cero entonces hacemos una copia de lo ya existente
        state.value = [
          ...state.value,
					// y se manda todo lo qe se mando por dispatch
          {
            ...action.payload,
						// y agregamos un id
            id:
						// en donde si los davores del estado son mayores a cero
              state.value.length > 0
							// asignamos un id autoincremental
                ? state.value[state.value.length - 1].id + 1
								// si no se le pone 1
                : 1,
          },
        ];
      }
			// uego todo se anexa a localStorage como un json
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
			//console.log(state.value);
    },
    updateItem: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (item.length > 0) {
        state.value = state.value.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter(
        (e) =>
          e.slug !== item.slug || e.color !== item.color || e.size !== item.size
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
  },
});

export const { addItem, removeItem, updateItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
