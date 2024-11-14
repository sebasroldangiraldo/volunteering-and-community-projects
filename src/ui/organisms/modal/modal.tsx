import Button from "@/ui/atoms/button";
import styles from "./modal.module.scss";
import { icons } from "@/ui/atoms/icons";
import Title from "@/ui/atoms/title";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    open: boolean;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, title, open, onClose }) => {

    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div>
                    <Button onClick={onClose} className={styles.button}>{icons.close}</Button>
                </div>
                <div className={styles.content}>
                    <Title level={2}>{title}</Title>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;