import React , {useState,useEffect}from 'react'
import { useTodo } from '../TodoContext'
import {AiFillEdit, AiFillDelete, AiOutlineCheck,AiOutlineClose, AiFillPushpin} from 'react-icons/ai'

import {Wrapper , ListSection, TodoBox, ImportantCheck, EditInput, TodoContent,RemoveButton, ConfirmEdit,CancelEdit,EditButton, ButtonsBox,Label,Box, Categories, Option } from './style'

function TodoListSection(props) {

    const [currentList,setCurrentList] = useState([])
    const [filteredList,setFilteredList] = useState('');
    const [currentCategory,setCurrentCategory] = useState('all')
    const [editingTodo, setEditingTodo] = useState(null)
    const [editedTodo,setEditedTodo] = useState('')
    const {todoList, setTodoList} = useTodo();
    
    const removeTodo = id => {
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
        name === 'all' ? setCurrentList(todoList) : setCurrentList(filteredList)
    }
    useEffect(() => {
        const newList = [...todoList].filter(item => item.category === currentCategory)
        setFilteredList(newList)
    }, [setFilteredList,currentCategory,todoList,])

    
    useEffect(() => {
        
        if(currentCategory === 'all'){
            setCurrentList(todoList)
        }
        else{
            setCurrentList(filteredList)
        }
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
                    <TodoBox key ={item.id} className ={item.category}>
                        
                        <Box>
                        <Label htmlFor = {item.id} important = {item.important}>
                                        <AiFillPushpin size = {22} />
                        </Label> 
                            <ImportantCheck 
                            id = {item.id}
                            type ='checkbox' 
                            onChange={() => toggleImportant(item.id)} 
                            checked = {item.important}
                            />
                            
                            {editingTodo === item.id 

                            ?
                            <EditInput 
                            type ='text' 
                            onChange ={(e) => setEditedTodo(e.target.value)}
                            value = {editedTodo}
                            className = 'element'
                            autoFocus = {true}
                            maxLength = {140}
                            /> 
                            : 
                            <TodoContent>
                                {item.todo}
                            </TodoContent>}
                        </Box>
                        {item.id === editingTodo 
                        ? 
                        <ButtonsBox>
                            <ConfirmEdit onClick={() =>handleEdit(item.id)} hoverColor ={'#18E038'}>
                                <AiOutlineCheck size = {22} />
                            </ConfirmEdit> 
                            <CancelEdit onClick = {handleCancelEdit} hoverColor ={'#EE6352'}>
                                <AiOutlineClose size = {22} />
                            </CancelEdit>
                        </ButtonsBox>
                        : 
                        <ButtonsBox>                   
                            <EditButton  onClick={() => setEditingTodo(item.id)} hoverColor ={'#FFBC0A'}>
                                <AiFillEdit size = {22} />
                            </EditButton>
                            <RemoveButton onClick ={() => removeTodo(item.id)} hoverColor ={'#D05353'}>
                                <AiFillDelete size = {22} />
                            </RemoveButton>
                        </ButtonsBox>
                        }
                </TodoBox>
                ))}
                    
            </ListSection>
        </Wrapper>
    )
}

export default TodoListSection
