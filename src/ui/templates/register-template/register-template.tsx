import RegisterForm from "@/ui/organisms/register-form/register-form";
import styles from "./register-template.module.scss";
import Link from "next/link";

export const RegisterTemplate = () => {
    return (
        <div className={styles.bigContainer}>
            <Link href={"/home"} className={styles.link}>Volver al inicio</Link>
            <div className={styles.templateContainer}>
                <div className={styles.formContainer}>
                    <RegisterForm></RegisterForm>
                </div>
            </div>
        </div>
    );
};