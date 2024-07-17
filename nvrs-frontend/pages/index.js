// /var/www/html/nvrs-frontend/pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import '../public/css/login.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurant App - Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/login.css" />
      </Head>
      <div className="container">
        <h1>Welcome to Virtual Restaurant Solutions</h1>
        <div className="login-options">
          <Link href="/menuItems">
            <button className="login-button">Employee</button>
          </Link>
          <button className="login-button" id="client-login">Restaurant Client or Patron</button>
        </div>
      </div>
    </div>
  );
}
