import { Type } from "./action.type";

const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];

export const initialState = {
  basket: savedBasket,
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!existingItem) {
        const updatedBasket = [...state.basket, { ...action.item, amount: 1 }];

        localStorage.setItem("basket", JSON.stringify(updatedBasket));

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });

        localStorage.setItem("basket", JSON.stringify(updatedBasket));

        return {
          ...state,
          basket: updatedBasket,
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      localStorage.setItem("basket", JSON.stringify(newBasket));

      return {
        ...state,
        basket: newBasket,
      };
    }

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      localStorage.setItem("basket", JSON.stringify([]));
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};
