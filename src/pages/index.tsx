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
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className="bg-gray-100">
					<div>
						<SideBar />
					</div>
					<div>
						<Form />
					</div>
				</div>
			</main>
		</>
	);
}
