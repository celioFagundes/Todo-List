import React , {useState,useEffect}from 'react'
import { useTodo } from '../TodoContext'
import {AiFillEdit, AiFillDelete, AiOutlineCheck,AiOutlineClose, AiFillPushpin} from 'react-icons/ai'

import {Wrapper , ListSection, TodoContainer, ImportantToggle, EditInput, TodoContent,DeleteButton, ConfirmEdit,CancelEdit,EditButton, ButtonsContainer,Label,Categories, Option } from './style'

function TodoListSection(props) {
    const {todoList, setTodoList} = useTodo() // Default to-do list 
    const [currentList,setCurrentList] = useState([]) // Current list displayed on screen
    const [filteredList,setFilteredList] = useState(''); // Filtered list by category
    const [currentCategory,setCurrentCategory] = useState('all')
    const [editingTodo, setEditingTodo] = useState(null)  
    const [editedTodo,setEditedTodo] = useState('')
    
    
    const deleteTodo = id => {
        const newtodoList = [...todoList].filter(item => item.id !== id);
        setTodoList(newtodoList);
    }
    const handleEdit = id =>{
        
        const newTodoList = [...todoList].map((item) =>{
            
            if(item.id === id && editedTodo !== ''){
                item.todo = editedTodo
                setEditingTodo(null)
            }
            return item
        })
        setTodoList(newTodoList)
        setEditedTodo('')
    }

    const handleStartEdit = (todo, id) =>{
        setEditingTodo(id)
        setEditedTodo(todo)
    }

    const handleCancelEdit = () => {
        setEditingTodo(null)
        setEditedTodo('')
    }

    const toggleImportant = id =>{
        
        const newTodoList = [...todoList].map((item) =>{
            if(  item.id === id){
                item.important = !item.important
            }
            return item
        })
        setTodoList(newTodoList)
        const sortList = [...todoList].sort((a, b) => (a.important > b.important) ? -1 : 1)
        setTodoList(sortList)
        
    }

    const handleSwitchCategory = name =>{
        setCurrentCategory(name)
        
    }

    // After switching current category, updates the filtered list so it shows the current category
    useEffect(() => {

        const newList = [...todoList].filter(item => item.category === currentCategory)
        setFilteredList(newList)
        
    }, [setFilteredList,currentCategory,todoList,])

    // Sets current list
    useEffect(() => {

        currentCategory === 'all' ? setCurrentList(todoList) : setCurrentList(filteredList)

    }, [todoList,filteredList,currentCategory])

    return (
        <Wrapper className = 'container'>
            <Categories>
                    <Option 
                    onClick = {() =>  handleSwitchCategory('all')} 
                    className = { currentCategory === 'all' ? 'onFocus all' : ''}>
                        All
                    </Option>

                    <Option 
                    onClick = {() =>  handleSwitchCategory('health')} 
                    className = { currentCategory === 'health' ? 'onFocus health' : ''}>
                       Health
                    </Option>

                    <Option 
                    onClick = {() =>  handleSwitchCategory('home')} 
                    className = { currentCategory === 'home' ? 'onFocus home' : ''}>
                        Home
                    </Option>

                    <Option 
                    onClick = {() =>  handleSwitchCategory('work')} 
                    className = { currentCategory === 'work' ? 'onFocus work' : ''}>
                        Work
                    </Option>
            </Categories>
            <ListSection  background = "#0A332A" >
                { currentList.map(item =>(
                    <TodoContainer key ={item.id} className ={item.category}>    
                        <Label htmlFor = {item.id} important = {item.important}>
                            <AiFillPushpin size = {22} />
                        </Label> 
                        <ImportantToggle
                        id = {item.id}
                        type ='checkbox' 
                        onChange={() => toggleImportant(item.id)} 
                        checked = {item.important}
                        />
                        
                        {editingTodo === item.id 

                        ?
                        <EditInput 
                        name = 'edit'
                        onChange ={(e) => setEditedTodo(e.target.value)}
                        value = {editedTodo}
                        className = 'element'
                        autoFocus = {true}
                        maxLength = {130}
                        /> 
                        : 
                        <TodoContent>
                            {item.todo}
                        </TodoContent>}
                        
                        {item.id === editingTodo 
                        ? 
                        <ButtonsContainer>
                            <ConfirmEdit className = 'confirm' onClick={() =>handleEdit(item.id)}>
                                <AiOutlineCheck size = {22} />
                            </ConfirmEdit> 
                            <CancelEdit  className = 'cancel'onClick = {handleCancelEdit} >
                                <AiOutlineClose size = {22} />
                            </CancelEdit>
                        </ButtonsContainer>
                        : 
                        <ButtonsContainer>                   
                            <EditButton  className = 'edit' onClick={() => handleStartEdit(item.todo,item.id)}>
                                <AiFillEdit size = {22} />
                            </EditButton>
                            <DeleteButton  className = 'delete' onClick ={() => deleteTodo(item.id)} >
                                <AiFillDelete size = {22} />
                            </DeleteButton>
                        </ButtonsContainer>
                        }
                </TodoContainer>
                ))}
                    
            </ListSection>
        </Wrapper>
    )
}

export default TodoListSection
