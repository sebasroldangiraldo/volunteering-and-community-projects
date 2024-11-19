'use client';

import { IGetProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";
import CardsPanel from "@/ui/organisms/cards-panel/cards-panel";
import Header from "@/ui/organisms/header/header"
import Modal from "@/ui/organisms/modal/modal";
import Pagination from "@/ui/organisms/pagination/pagination";
import { ProjectsForm } from "@/ui/organisms/projects-form/projects-form";
import ProjectsTable from "@/ui/organisms/projects-table/projects-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./projects-template.module.scss";

interface ProjectsTemplateProps {
    data: IGetProjectsResponse;
};

const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ data }) => {

    const router = useRouter();

    const [modal, setModal] = useState<boolean>(false);
    const [projectID, setProjectID] = useState<number>();

    const handleDownload = async () => {

        try {
            const response = await fetch('/api/projects/download');

            if (!response.ok) {
                throw new Error('Error al descargar el archivo');
            };

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'reporte-volunteering-and-community-projects.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();

        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        };
    };

    const handleDelete = async (id: number) => {

        const confirmation = confirm('¿deseas eliminar este proyecto?');

        if (!confirmation) return;

        try {
            await fetch(`/api/projects/delete/${id}`, {
                method: 'DELETE'
            });

            router.refresh()
            console.log('eliminado');

        } catch (error) {
            console.error('error', error);
        }
    };

    const handleEdit = (id: number) => {
        setModal(!modal);
        setProjectID(id);
    };

    const toggleModal = () => {

        setModal(!modal);

        if (!modal) {
            setProjectID(undefined);
        };
    };

    return (
        <div>
            <Header handleDownload={handleDownload} toggleModal={toggleModal}></Header>

            <Modal title="Agregar Proyecto" open={modal} onClose={toggleModal}>
                <ProjectsForm toggleModal={toggleModal} projectID={projectID}></ProjectsForm>
            </Modal>

            <div className={styles.container}>

            <CardsPanel data={data}></CardsPanel>

            <ProjectsTable data={data} onEdit={handleEdit} onDelete={handleDelete}></ProjectsTable>

            </div>
            
            <Pagination data={data}></Pagination>
        </div>
    );
};

export default ProjectsTemplate;