import Title from "@/ui/atoms/title";
import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar : React.FC = () => {

    return (
        <div className={styles.navbar}>
            <Title level={2} className={styles.title}>VolunteerConnect</Title>
            <div className={styles.links}>
                <Link href={"/login"} className={styles.link}>Iniciar Sesión</Link>
                <Link href={"/register"} className={`${styles.link} ${styles.register}`}>Registrarse</Link>
            </div>
        </div>
    );
};

export default Navbar;