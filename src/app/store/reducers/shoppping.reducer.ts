import {
  ShoppingAction,
  ShoppingActionTypes,
} from './../actions/shopping-actions';
import { ShoppingItem } from './../models/shopping-item-model';

const initialState: Array<ShoppingItem> = [
  {
    id: '569ef45e-cb9a-444f-9177-1df4724b7260',
    name: 'Diet Coke',
  },
  {
    id: '009ef45e-c20a-360f-9177-1df9994b7250',
    name: 'Fanta',
  },
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
