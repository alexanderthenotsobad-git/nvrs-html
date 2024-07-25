"use client"; // Add this directive at the top

import Head from 'next/head';
import styles from '../../styles/Employee.module.css';

const Employee: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employee Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style/employee.css" />
      </Head>
      <h1>Employee Dashboard</h1>
      <div className={styles.employeeOptions}>
        <button className={styles.employeeButton} id="manage-orders">Manage Orders</button>
        <button className={styles.employeeButton} id="manage-menu-items">Manage Menu Items</button>
        <button className={styles.employeeButton} id="manage-employees">Manage Employees</button>
      </div>
    </div>
  );
};

export default Employee;
