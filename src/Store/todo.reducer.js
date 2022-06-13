import { ADD_TODO_SUCCESS, COMPLETE_TODO, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO,ADD_TODO_ERROR,ADD_TODO_LOADING } from "./action.types"


const initState={
    // todos: [],
    // loading:false,
    // error:false,

    addTodo: {
        loading:false,
        error:false,
        data:{}
    },
    getTodos: {
        loading:false,
        error:false,
        data:[]
    }
    
}

export const todoReducer=(state=initState,{type,payload})=> {
    console.log(state)
    switch(type)
    {
        case GET_TODOS_LOADING:{
            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading:true
                
                }
                
            }
        }
        case GET_TODOS_SUCCESS:{
            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading:false,
                    data: payload, //here can be data:
                
                }
                
                
                
            }
        }
        case GET_TODOS_ERROR:{
            return {
                ...state,
                getTodos:{
                    ...state.getTodos,
                    loading:false,
                    error:true
                
                }

               
            }
        }

        case ADD_TODO_LOADING:{
            return {
                ...state,
                addTodo:{
                    ...state.addTodo,
                    loading:true
                
                }
                
            }
        }


        case ADD_TODO_SUCCESS:{
            // state.todos.push({
            //     ...payload,
            //     id:Date.now()
            
    return{...state,
        getTodos: {
            data: [...state.getTodos.data, payload]
        },
        
        addTodo:{
            ...state.addTodo,
            loading:false,
            data:payload
        }
        };

    }

    case ADD_TODO_ERROR:{
        return {
            ...state,
            addTodo:{
                ...state.addTodo,
                loading:false,
                error:true
            
            }

           
        }
    }
       


        case COMPLETE_TODO:{
            
            return{...state}

        }
        case UPDATE_TODO:{
            return{...state}

        }
        case DELETE_TODO:{
            return{...state}

        }
        default:{
            return state

        }
    }
}