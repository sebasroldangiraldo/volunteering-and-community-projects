
import styles from "./cards-panel.module.scss";
import Card from "@/ui/molecules/card/card";
import { icons } from "@/ui/atoms/icons";
import { IGetProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";

interface CardsPanelProps {
    data: IGetProjectsResponse;
};

const CardsPanel: React.FC<CardsPanelProps> = ( {data }) => {

    const totalProjects = data.metadata.totalItems;
    const activeProjects = data.data.filter((project) => project.isActive).length;
    const totalOrganizers = new Set(data.data.map((project) => project.organizer.id)).size;

    return (
        <div className={styles.container}>
             <Card title="Total Proyectos" children={icons.folder} value={totalProjects}></Card>
             <Card title="Proyectos Activos" children={icons.chart} value={activeProjects}></Card>
             <Card title="Organizadores" children={icons.users} value={totalOrganizers}></Card>
             <Card title="Próximo Proyecto" children={icons.calendar} value={'Invalid Date'}></Card>

        </div>
    );
}; 

export default CardsPanel;