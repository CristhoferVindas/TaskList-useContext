import {Task, useTaskContext} from '@/pages/context/TaskContext';
import {useContext, useEffect, useState} from 'react';

const Form: React.FC = () => {
	const {tasks, setTasks, updateTask, selectedTask, setSelectedTask} = useTaskContext();

	useEffect(() => {
		const taskToUpdate = tasks.find((t) => t.id === selectedTask.id);
		if (taskToUpdate) {
			setSelectedTask(selectedTask.id);
		}
	}, [selectedTask.id, setSelectedTask, tasks]);

	const handleTaskClick = (e: React.FormEvent, id: number, status: boolean) => {
		e.preventDefault();
		if (id != 0) {
			updateTask(id, status);
		}
	};

	return (
		<div className="max-w-sm p-6 rounded-lg shadow dark:bg-zinc-900 bg-gray-500 flex items-center">
			{selectedTask.id == 0 ? (
				<div>
					<p className="dark:text-white text-black font-bold">Seleccione la tarea que quiere modificar</p>
				</div>
			) : (
				<div className=" grid grid-rows-3 grid-flow-col dark:bg-zinc-400 bg-gray-100  content-center rounded-lg ">
					<p className=" font-bold rounded-lg text-center text-gray-950 dark:text-gray-800 p-2 m-2">
						Tarea: {selectedTask.name}
					</p>
					<div className=" flex items-center justify-center  m-2 rounded-lg columns-2">
						<label className="flex items-center cursor-pointer">
							<div className="relative ">
								<input
									type="checkbox"
									value=""
									className="sr-only peer"
									checked={selectedTask.status}
									onChange={(e) => handleTaskClick(e, selectedTask.id, e.target.checked)}
								/>
								<div className="w-11 h-6 bg-red-600 rounded-full peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
							</div>
							<span className="ml-3 text-sm text-gray-900 font-bold">
								{selectedTask.status ? 'Activa' : 'Inactiva'}
							</span>
						</label>
					</div>

					<button
						className="text-white p-2 m-2 bg-gradient-to-r bg-blue-700 font-medium rounded-lg text-sm text-center hover:bg-blue-600"
						onClick={(e) => setSelectedTask(0)}
					>
						Limpiar pantalla
					</button>
				</div>
			)}
		</div>
	);
};

export default Form;
