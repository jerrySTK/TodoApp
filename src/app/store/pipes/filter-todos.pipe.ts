import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todo/model/todo.model';
import { validFilter } from '../reducers/todos-filter.reducer';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Array<Todo>, filter: validFilter): any {
    switch ( filter ) {
      case 'active':
        return value.filter(e => !e.completed);
      case 'completed':
        return value.filter(e => e.completed);
      default:
        return value;
    }
  }

}
