import { useEffect, useState } from "react"
import { getAllTask } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
    const[task, setTask] = useState([])
    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTask();
            console.log(res.data);
            setTask(res.data)
        }
        loadTasks();
    }, []);
    return <div>
        {task.map(task => (
            <TaskCard key = {task.id} task = {task}/>
        ))}
    </div>  
}
