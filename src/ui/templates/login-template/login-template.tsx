import { LoginForm } from "@/ui/organisms/login-form/login-form";
import styles from "./login-template.module.scss";
import Link from "next/link";

export const LoginTemplate = () => {
    return (
        <div className={styles.bigContainer}>
            <Link href={"/home"} className={styles.link}>Volver al inicio</Link>
            <div className={styles.templateContainer}>
                <div className={styles.formContainer}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};