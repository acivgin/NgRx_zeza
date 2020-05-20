import {
  AddItemAction,
  DeleteItemAction,
} from './store/actions/shopping-actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';

import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: 'Shopping List';
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
    setTimeout(() => {
      this.addItem();
    }, 2000);
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    if (this.newShoppingItem.name.length) {
      this.store.dispatch(new AddItemAction(this.newShoppingItem));
    }

    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
