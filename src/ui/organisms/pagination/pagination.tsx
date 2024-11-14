import { IProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";
import Button from "@/ui/atoms/button";
import { icons } from "@/ui/atoms/icons";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.scss";

interface PaginationProps {
    data: IProjectsResponse;
};

const Pagination: React.FC<PaginationProps> = ({ data }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`?${params.toString()}`);
    };
    
    const currentPage = data.metadata.currentPage;

    return (
        <div className={styles.container}>
            <Button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>{icons.back}</Button>
            <span className={styles.text}>Página {currentPage} de {data.metadata.totalPages}</span>
            <Button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === data.metadata.totalPages}>{icons.foward}</Button>
        </div>
    );
};

export default Pagination;