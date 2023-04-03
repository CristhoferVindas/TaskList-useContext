/*import {Task} from '@/pages/context/TodoContext';
import React from 'react';
import {useState} from 'react';


const Form = () => {
	const {updateTask, tasks, selectedTaskId, getTaskById} = useTasks();
	const [task, setTask] = useState<Task>({id: 0, name: '', completed: false});

	const taskExist = (task: Task) => {
		let existingTask = false;
		for (let index = 0; index < tasks.length; index++) {
			if (task.name == tasks[index].name) {
				existingTask = true;
				index = tasks.length + 1;
			}
		}
		return existingTask;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		updateTask(task.id, task);
		getTaskById(task.id);
		setTask(selectedTaskId);
	};
	return (
		<form onSubmit={handleSubmit} className="p-5 ">
			<div className=" p-5 ">
				<p>{selectedTaskId.name}</p>
				<label className="m-5 relative inline-flex items-center mr-5 cursor-pointer">
					<input
						type="checkbox"
						className="sr-only peer"
						checked={selectedTaskId.completed}
						onChange={(e) => {
							setTask({...task, id: selectedTaskId.id, name: selectedTaskId.name, completed: e.target.checked});
							handleSubmit;
						}}
					/>
					<div className="w-11 h-6 bg-red-700 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-re after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
				</label>
			</div>
			<button type="submit">{task.id === 0 ? 'Add' : 'Update'} </button>
		</form>
	);
};

export default Form;
*/

import {Task, useTaskContext} from '@/pages/context/TaskContext';
import {useContext, useEffect, useState} from 'react';

const Form: React.FC = () => {
	const {tasks, setTasks, updateTask, selectedTask, setSelectedTask} = useTaskContext();

	useEffect(() => {
		const taskToUpdate = tasks.find((t) => t.id === selectedTask.id);
		if (taskToUpdate) {
			setSelectedTask(selectedTask.id, selectedTask.completed);
		}
	}, [selectedTask.completed, selectedTask.id, setSelectedTask, tasks]);

	const handleTaskClick = (e: React.FormEvent, id: number, completed: boolean) => {
		if(id ===0)
		e.preventDefault();
		updateTask(id, completed);
		setSelectedTask(id, true);
	};

	return (
		<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
			<p className="text-gray-800 dark:text-gray-200 p-2">Tarea: {selectedTask.name}</p>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					className="sr-only peer p-2"
					checked={selectedTask.completed}
					onChange={(e) => handleTaskClick(e, selectedTask.id, e.target.checked)}
				/>
				<div className="w-11 h-6 bg-red-700 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-re after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
			</label>
		</div>
	);
};

export default Form;
