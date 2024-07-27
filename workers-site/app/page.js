'use client'; // This should be at the very top

import { useRouter } from 'next/navigation'; // Use next/navigation for client-side routing
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  const router = useRouter();

  const handleEmployeeClick = () => {
    router.push('/employee');
  };

  const handleClientClick = () => {
    alert('Client login not implemented yet.');
  };

  return (
    <div>
      <h1>Welcome to Virtual Restaurant Solutions</h1>
      <div className="login-options">
        <button className="login-button" onClick={handleEmployeeClick}>
          Employee
        </button>
        <button className="login-button" onClick={handleClientClick}>
          Restaurant Client or Patron
        </button>
      </div>
    </div>
  );
}
