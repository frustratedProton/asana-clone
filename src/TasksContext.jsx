/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import dayjs from 'dayjs';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
        const newTask = {
            id: newId,
            name: `Task ${newId}`,
            dueDate: dayjs().format('YYYY-MM-DD'),
            projectName: '',
            done: false,
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const markTaskDone = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };

    const editTask = (id, field, value) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, [field]: value } : task
        ));
    };

    const filteredTasks = (searchText) => {
        return tasks.filter(
            (task) =>
                task.name.toLowerCase().includes(searchText.toLowerCase()) ||
                task.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
                task.dueDate.includes(searchText)
        );
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                markTaskDone,
                editTask,
                filteredTasks,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export { TasksContext };
