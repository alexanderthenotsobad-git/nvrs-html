"use client"; // Add this directive at the top

import Head from 'next/head';
import styles from './styles/Login.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleEmployeeLogin = () => {
    router.push('/employee');
  };

  const handleClientLogin = () => {
    // Handle client login logic here
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Restaurant Solution - Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="login.css" />
      </Head>
      <h1>Welcome to Virtual Restaurant Solution</h1>
      <div className={styles.loginOptions}>
        <button className={styles.loginButton} onClick={handleEmployeeLogin}>Employee</button>
        
        <button className={styles.loginButton} onClick={handleClientLogin}>Restaurant Client or Patron</button>
      </div>
    </div>
  );
}
