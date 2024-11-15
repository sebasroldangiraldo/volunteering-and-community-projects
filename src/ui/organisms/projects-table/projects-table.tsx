import { IGetProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";
import Button from "@/ui/atoms/button";
import Title from "@/ui/atoms/title";
import styles from "./projects-table.module.scss";

interface ProjectsTableProps {
    data: IGetProjectsResponse;
    onEdit: (id : number) => void;
    onDelete: (id : number) => void;
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data, onEdit, onDelete}) => {

    return (
        <div className={styles.tableContainer}>

            <div className={styles.header}>
            <Title level={3}>Lista de Proyectos</Title>
            <input type="text" placeholder="Buscar Proyectos" className={styles.input}></input>
            </div>

            <table className={styles.table}>

                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.title}>Título</th>
                        <th className={styles.description}>Descripción</th>
                        <th className={styles.start}>Fecha de Inicio</th>
                        <th className={styles.end}>Fecha de Fin</th>
                        <th className={styles.status}>Estado</th>
                        <th className={styles.organizer}>Organizador</th>
                        <th className={styles.actionsTh}>Acciones</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {data.data.map((project, index) => (
                        <tr key={index}>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>{project.startDate.toString()}</td>
                            <td>{project.endDate.toString()}</td>
                            <td> {project.isActive ? (<span className={styles.active}>Activo</span>) : (<span className={styles.inactive}>Inactivo</span>)}</td>
                            <td>{project.organizer.name}</td>
                            <td>
                                <div className={styles.actions}>
                                    <Button type="button" className={styles.edit} onClick={() => onEdit(project.id)} >Editar</Button>
                                    <Button type="button" className={styles.delete} onClick={() => onDelete(project.id)}>Eliminar</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    );
};

export default ProjectsTable;