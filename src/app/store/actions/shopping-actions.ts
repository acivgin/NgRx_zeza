import { ShoppingItem } from './../models/shopping-item-model';
import { Action } from '@ngrx/store';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
