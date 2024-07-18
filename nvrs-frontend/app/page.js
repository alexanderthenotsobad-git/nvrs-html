import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from 'next/router';

'use client';

// app/page.js
export default function HomePage() {
  const router = useRouter();

  const handleEmployeeClick = () => {
    router.push('/menuItems');
  };

  const handleClientClick = () => {
    alert('Client login not implemented yet.');
  };

  return (
    <div>
      <h1>Welcome to Restaurant App</h1>
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