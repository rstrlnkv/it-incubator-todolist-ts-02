import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValueTypes = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ])

    function removeTask(id:number) {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
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
            />
        </div>
    );
}

export default App;
