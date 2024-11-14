'use client';

import { icons } from "@/ui/atoms/icons";
import Button from "@/ui/atoms/button";
import Title from "@/ui/atoms/title";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { signOut } from "next-auth/react";

const Sidebar : React.FC = () => {

    const handleSignOut = () => {
        signOut();
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Title level={2} className={styles.title}>VolunteerConnect</Title>
            </div>
            <div className={styles.options}>
                <Link href={"/dashboard/projects"} className={styles.link}>{icons.folder}Proyectos</Link>
                <Button type="button" className={styles.button} onClick={handleSignOut}>{icons.logout}Cerrar Sesión</Button>
            </div>
        </div>
    );
};

export default Sidebar;