import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueTypes} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:string) => void
    changeFilter: (value:FilterValueTypes) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const onNewTitleTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("")
        }
    }
    const addTask =  () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTaskTitle} onChange={onNewTitleTaskHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map( (task) => {
                    return <li>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={ () => { props.removeTask(task.id) }}>✖️</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ () => {props.changeFilter("all")}}>All</button>
            <button onClick={ () => {props.changeFilter("active")}}>Active</button>
            <button onClick={ () => {props.changeFilter("completed")}}>Completed</button>
        </div>
    </div>
}
