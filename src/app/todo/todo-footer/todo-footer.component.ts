import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { BorrarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public filtros: filtrosValidos[] = ["todos","completados","pendientes"];
  public filtroActual: filtrosValidos;
  public pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    })
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos){
    const accion = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  limpiarCompletadas(){
    const accion = new BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
