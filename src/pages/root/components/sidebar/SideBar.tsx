import {Task, useTaskContext} from '@/pages/context/TaskContext';
import React from 'react';

const SideBar = () => {
	const {tasks, updateTask, setSelectedTask, selectedTask} = useTaskContext();

	const handleTaskClick = (id: number) => {
		setSelectedTask(id);
	};
	return (
		<div className="dark:text-white">
			<div id="sidebar" className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
				<div className="overflow-y-auto py-5 px-3 h-full dark:bg-zinc-900 bg-gray-500 ">
					<ul className="space-y-2 gap-2">
						{tasks.map((task) => (
							<li key={task.id}>
								<div
									className={`flex items-center font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${
										task.id === selectedTask.id
											? 'dark:bg-zinc-400 dark:text-black font-bold bg-gray-700 text-white'
											: ' dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-gray-50 hover:bg-gray-300 '
									} ${task.status ? 'border-l-8 border-green-700' : 'border-l-8 border-red-600'}`}
									onClick={(e) => handleTaskClick(task.id)}
								>
									<span className="flex-1">{task.name}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
