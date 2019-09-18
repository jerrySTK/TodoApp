import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';

import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  @ViewChild('txtEdit', { static: true }) txtEdit: ElementRef;
  editing = false;
  description: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  changeStatus(event: any, id: number) {
    this.store.dispatch(new fromActions.CompleteTodoAction(id));
  }

  edit() {
    this.editing = !this.editing;
    setTimeout(() => {
      this.txtEdit.nativeElement.select();
    }, 200);
  }

  update() {
    this.store.dispatch(new fromActions.UpadateTodoAction({ description: this.item.description, id: this.item.id }));
  }

  delete() {
    if (confirm('¿Seguro de eliminar la tarea seleccionada?')) {
      this.store.dispatch(new fromActions.RemoveTodoAction(this.item.id));
    }
  }
}
