import { useSession } from "next-auth/react";
import { CustomSession } from "@/app/api/auth/[...nextauth]/route";
import Text from "@/ui/atoms/text";
import styles from "./user-profile.module.scss";

const UserProfile : React.FC = () => {

    const { data : session } = useSession();
    const userSession = session as CustomSession;

    return (
        <div className={styles.container}>
            <img src={userSession.user.photo!} alt="" className={styles.image} />
            <Text className={styles.text}>{userSession.user.email}</Text>
        </div>
    );
};

export default UserProfile;