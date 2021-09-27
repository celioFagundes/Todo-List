import React ,{createContext,useState,useContext}from 'react'

const TodoContext = createContext();

export default function TodoListContext({children}) {

    const [todoList,setTodoList] = useState([]);
    
    return (
        <TodoContext.Provider value = {{todoList,setTodoList}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo(){
    const context = useContext(TodoContext);
    const {todoList,setTodoList} = context;
    return {todoList,setTodoList};
}
