import React,{useState,useEffect} from 'react';
import { useTodo } from '../TodoContext';
import { Wrapper ,Container,SelectCategory ,FormBox,Option, Label,TaskInput, Button,AddCheck} from './style';

import {FaHeartbeat} from 'react-icons/fa';
import {IoIosBusiness} from 'react-icons/io';
import {GrAdd} from 'react-icons/gr'
import { AiOutlineCheck,AiOutlineClose,AiTwotoneHome} from 'react-icons/ai'

export default function NewTodoSection(props) {

    const [id,setId] = useState(0)
    const {todoList,setTodoList} = useTodo();
    const [newTodo,setNewTodo] = useState('')
    const [todoCategory, setTodoCategory] = useState('')
    const [checked,setChecked] = useState(false)
    

    useEffect(() =>{
        const temp = localStorage.getItem('todoList')
        const todoListCarregada = JSON.parse(temp)
        if(todoListCarregada){
            setTodoList(todoListCarregada)
        }
    }, [setTodoList])

    useEffect(() =>{
        const temp = JSON.stringify(todoList)
        localStorage.setItem('todoList',temp)
    },[todoList,setTodoList])

    useEffect(()=>{
        const tempId = localStorage.getItem('currentId')
        const lastId = JSON.parse(tempId)
        if(lastId){
            setId(lastId)
        }
    },[setId])

    useEffect(() =>{
        const tempId = JSON.stringify(id)
        localStorage.setItem('currentId',tempId)
    },[id,setId])


    const handleChange = input =>{
       setNewTodo(input.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(todoCategory !== '' && newTodo !== ''){
        setId(id + 1)
        setTodoList([...todoList,
            {
            id: id, 
            todo:newTodo, 
            complete: false,
            category: todoCategory,
            important: false,
            }])
       setNewTodo('');}    
    }
    const toggleChecked = () =>{
        setChecked(true)
    }
    const handleCancel = () =>{
        setNewTodo('')
        setChecked(false)
    }
    const handleSelectedCategory = type =>{
        
        setTodoCategory(type)
                
        
    }
    return (
        <Wrapper >
            <Container className = 'container'>
                <Label htmlFor = 'check' checked = {checked}>
                   <GrAdd/>
                </Label>
                <AddCheck id = 'check' type = 'checkbox'  onChange = {toggleChecked}checked = {checked}></AddCheck>
                <FormBox onSubmit = {handleSubmit}>
                    <SelectCategory>
                        <Option onClick = {() => handleSelectedCategory('health')} className = { todoCategory === 'health' ? 'onFocus health' : ''}>
                            <FaHeartbeat size = {25} />
                        </Option>
                        <Option onClick = {() => handleSelectedCategory('home')} className = { todoCategory === 'home' ? 'onFocus home' : ''}>
                            <AiTwotoneHome size = {25} />
                        </Option>
                        <Option onClick = {() => handleSelectedCategory('work')} className = { todoCategory === 'work' ? 'onFocus work' : ''}>
                            <IoIosBusiness size = {25} />
                        </Option>
                    </SelectCategory>
                    <TaskInput type = 'text' onChange={handleChange} value ={newTodo} placeholder = 'Create a new todo'/>
                    <Button type = 'submit' hoverColor ={'#18E038'}>
                        <AiOutlineCheck   size = {22}/>
                    </Button>
                    <Button onClick = {handleCancel} hoverColor ={'#EE6352'}>
                        <AiOutlineClose size = {22} />
                    </Button>
                </FormBox>
            </Container>
        </Wrapper>
    )
}


