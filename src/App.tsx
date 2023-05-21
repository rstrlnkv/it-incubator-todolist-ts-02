import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValueTypes = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Redux", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false }
    ])
    console.log(tasks)

    function removeTask(id:string) {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
    }
    function addTask(title: string){
        let newTask = {
            id:v1(),
            title: title,
            isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    let [filter, setFilter] = useState<FilterValueTypes>("all")

    let tasksForToDoList = tasks

    if(filter === "active") {
        tasksForToDoList = tasks.filter(task => !task.isDone)
    }
    if(filter === "completed") {
        tasksForToDoList = tasks.filter(task => task.isDone)
    }

    function changeFilter(value: FilterValueTypes){
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForToDoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
