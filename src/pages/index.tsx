import Head from 'next/head';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.css';
import SideBar from './root/components/sidebar/SideBar';
import Form from './root/components/form/Form';

const inter = Inter({subsets: ['latin']});

export default function Home() {
	return (
		<>
			<Head>
				<title>Task-List</title>
				<meta name="description" content="Generate task-list using useContext hook" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div>
					<div>
						<Form />
					</div>
					<div>
						<SideBar />
					</div>
				</div>
			</main>
		</>
	);
}
