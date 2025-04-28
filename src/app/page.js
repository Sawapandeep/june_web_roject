import Image from "next/image";
import styles from "./page.module.css";
import navbar   from "./components/navbar/navbar.jsx";
export default function Home() {
  return (
    <div className={styles.page}>
      <navbar/> 
      <h1 className={styles.title}>Welcome to My Next.js App</h1>
      </div>
  );
}
