import Button from "@/ui/atoms/button";
import Title from "@/ui/atoms/title";
import styles from "./header.module.scss";
import { icons } from "@/ui/atoms/icons";
import UserProfile from "@/ui/molecules/user-profile/user-profile";

interface HeaderProps {
    handleDownload : () => void;
    toggleModal: () => void;
};

const Header : React.FC<HeaderProps> = ({handleDownload , toggleModal}) => {
    return (
        <div className={styles.header}>
            <div>
                <Title level={2}>Dashboard de Proyectos</Title>
            </div>
            <div className={styles.options}>
                <Button type="button" onClick={handleDownload} className={styles.button}>{icons.document}Descargar Reporte</Button>
                <Button type="button" onClick={toggleModal} className={styles.button}>{icons.add}Nuevo Proyecto</Button>
                <UserProfile></UserProfile>
            </div>
        </div>
    );
};

export default Header;