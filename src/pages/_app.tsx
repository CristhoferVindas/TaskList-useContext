import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import TaskContextProvider from './context/TaskContext';

export default function App({Component, pageProps}: AppProps) {
	return (
		<TaskContextProvider>
			<div className=" dark:bg-zinc-700 bg-slate-100">
				<Component {...pageProps} />;
			</div>
		</TaskContextProvider>
	);
}
