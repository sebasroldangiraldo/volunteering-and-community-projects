import Text from "@/ui/atoms/text";
import styles from "./card.module.scss";

interface CardProps {
    title : string;
    value : number | string;
    children: React.ReactNode;
}

const Card : React.FC<CardProps> = ({ title, value, children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <Text className={styles.title}>{title}</Text>
                {children}
            </div>
            <Text className={styles.value}>{value}</Text>
        </div>
    );
};

export default Card;