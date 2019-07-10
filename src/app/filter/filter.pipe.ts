import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case "completados":
        return todos.filter(todo => todo.completado);
        break;

      case "pendientes":
        return todos.filter(todo => !todo.completado);
        break;
    
      default:
        return todos;
        break;
    }
  }

}
