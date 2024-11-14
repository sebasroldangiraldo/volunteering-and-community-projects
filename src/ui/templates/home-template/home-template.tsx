import Navbar from "@/ui/molecules/navbar/navbar";
import styles from "./home-template.module.scss";
import HomeInformation from "@/ui/organisms/home-information/home-information";

const HomeTemplate : React.FC = () => {
    return (
        <div className={styles.container}>
            <Navbar></Navbar>
            <HomeInformation></HomeInformation>
        </div>
    );
};

export default HomeTemplate;