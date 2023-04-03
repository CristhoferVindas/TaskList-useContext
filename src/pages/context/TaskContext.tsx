/*import {Dispatch, SetStateAction, ReactNode, createContext, useState} from 'react';

interface CustomContextProps {
	customString: string;
	setCustomString: Dispatch<SetStateAction<string>>;
}

interface CustomContextProviderProps {
	children: ReactNode;
}

const CustomContext = createContext<CustomContextProps>({
	customString: '',
	setCustomString: () => {},
});

const CustomContextProvider = ({children}: CustomContextProviderProps) => {
	const [customString, setCustomString] = useState('');
	return (
		<CustomContext.Provider value={{customString, setCustomString}}>{children}</CustomContext.Provider>
	);
};

export {CustomContext, CustomContextProvider};
*/

/*
import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Task} from '../task/Task';

export interface Task {
	id: number;
	name: string;
	completed: boolean;
}

interface TasksContextType {
	tasks: Task[];
	selectedTaskId: Task;
	updateTask: (id: number, updatedTask: boolean) => void;
	getTaskById: (id: number) => void;
}

export interface CustomContextProviderProps {
	children: JSX.Element | JSX.Element[];
}

const TasksContext = createContext<TasksContextType>({
	tasks: [],
	updateTask: () => {},
	getTaskById: (id: number) => {},
	selectedTaskId: {id: 0, name: '', completed: false},
});

export const TasksProvider = ({children}: CustomContextProviderProps) => {
	const [tasks, setTasks] = useState<Task[]>([
		{id: 1, name: 'Comprar leche', completed: false},
		{id: 2, name: 'Pasear al perro', completed: true},
		{id: 3, name: 'Hacer ejercicio', completed: false},
	]);
	const [selectedTaskId, setSelectedTaskId] = useState<Task>({id: 0, name: '', completed: true});

	const getTaskById = (id: number) => {
		const newTask = tasks.find((task) => {
			if (task.id === id) {
				return task;
			}
		});
		if (newTask) {
			setSelectedTaskId(newTask);
		}
	};

	const updateTask = (id: number, updatedTask: boolean) => {
		setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? task.completed : updatedTask)));
	};

	return (
		<TasksContext.Provider value={{tasks, updateTask, getTaskById, selectedTaskId}}>
			{children}
		</TasksContext.Provider>
	);
};

export const useTasks = () => useContext(TasksContext);
*/ import {createContext, useContext, useState} from 'react';

export interface Task {
	id: number;
	name: string;
	completed: boolean;
}

interface TaskContextType {
	tasks: Task[];
	selectedTask: Task;
	updateTask: (id: number, completed: boolean) => void;
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
	setSelectedTask: (id: number, completed: boolean) => void;
}

const defaultTasks: Task[] = [
	{id: 1, name: 'Comprar leche', completed: false},
	{id: 2, name: 'Sacar al perro', completed: true},
	{id: 3, name: 'Hacer la cama', completed: false},
	{id: 4, name: 'Hacer ejercicio', completed: true},
	{id: 5, name: 'Cocinar cena', completed: false},
	{id: 6, name: 'Limpiar la casa', completed: false},
	{id: 7, name: 'Ir al supermercado', completed: true},
	{id: 8, name: 'Llamar al dentista', completed: false},
	{id: 9, name: 'Estudiar para el examen', completed: false},
];

const TaskContext = createContext<TaskContextType>({
	tasks: defaultTasks,
	selectedTask: {id: 0, name: '', completed: false},
	updateTask: () => {},
	setTasks: () => {},
	setSelectedTask: () => {},
});

export interface CustomContextProviderProps {
	children: JSX.Element | JSX.Element[];
}

const TaskContextProvider: React.FC<CustomContextProviderProps> = ({children}) => {
	const [tasks, setTasks] = useState<Task[]>(defaultTasks);
	const [selectedTask, setSelectedTasks] = useState<Task>({id: 0, name: '', completed: false});

	const updateTask = (id: number, completed: boolean) => {
		const newTasks = tasks.map((task) => (task.id === id ? {...task, completed} : task));
		setTasks(newTasks);
	};

	const setSelectedTask = (id: number, completed: boolean) => {
		const changedTask = tasks.filter((task) => task.id === id)[0];
		setSelectedTasks(changedTask);
	};

	return (
		<TaskContext.Provider value={{tasks, updateTask, setTasks, selectedTask, setSelectedTask}}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);

export default TaskContextProvider;
