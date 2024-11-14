'use client';

import { IGetProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";
import Header from "@/ui/organisms/header/header"
import Modal from "@/ui/organisms/modal/modal";
import Pagination from "@/ui/organisms/pagination/pagination";
import ProjectsTable from "@/ui/organisms/projects-table/projects-table";
import { useState } from "react";

interface ProjectsTemplateProps {
    data : IGetProjectsResponse;
};

const ProjectsTemplate : React.FC<ProjectsTemplateProps> = ({ data }) => {

    const [modal, setModal] = useState<boolean>(false);

    const handleDownload = () => {
        console.log('descarga')
    };

    const toggleModal = () => {

        setModal(!modal);

        // if (!modal) {
        //     setServiceID(undefined);
        // };
    };

    return (
        <div>
            <Header handleDownload={handleDownload} toggleModal={toggleModal}></Header>

            <Modal title="Agregar Proyecto" open={modal} onClose={toggleModal}>Hola</Modal>

            
            <ProjectsTable data={data}></ProjectsTable>
            <Pagination data={data}></Pagination>
        </div>
    );
};

export default ProjectsTemplate;