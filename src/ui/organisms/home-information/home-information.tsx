import Button from "@/ui/atoms/button";
import Text from "@/ui/atoms/text";
import Title from "@/ui/atoms/title";
import styles from "./home-information.module.scss";

const HomeInformation: React.FC = () => {

    return (
        <div className={styles.bigContainer}>
            <div className={styles.container}>
                <Title level={1} className={styles.title}>Conecta, Colabora, Cambia el Mundo</Title>
                <Text className={styles.text}>Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crean los tuyos propios para hacer una diferencia en tu comunidad.</Text>
                <div className={styles.buttons}>
                    <Button type="button" className={`${styles.button} ${styles.explore}`}>Explorar Proyectos</Button>
                    <Button type="button" className={`${styles.button} ${styles.start}`}>Comenzar como Organizador</Button>
                </div>
            </div>
        </div>
    );
};

export default HomeInformation;