import * as fromTodo from "./todo.actions";
import { Todo } from './model/todo.model';

const todo1 = new Todo("Tarea 1");
const todo2 = new Todo("Tarea 2");
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];
// TODO: Dejar el estado inicial vacio | registros de prueba

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo];
            break;

        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                }else{
                    return todoEdit;
                }
            });
            break;
        
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });
            break;
        
        case fromTodo.EDITAR_TODO:
            return state.map( todoEdit => {
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                }else{
                    return todoEdit;
                }
            });
            break;

        case fromTodo.BORRAR_TODO:
            return state.filter( todo => todo.id !== action.id);
            break;
        
        case fromTodo.BORRAR_ALL_TODO:
            return state.filter( todo => !todo.completado);
            break;

        default:
            return state;
            break;
    }
}