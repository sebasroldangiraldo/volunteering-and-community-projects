"use client";

import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./projects-form.module.scss";
import { ICreateProjectRequest } from "@/app/core/application/dto/projects/post/projects-request.dto";
import { FormField } from "@/ui/molecules/form-field/form-field";
import Button from "@/ui/atoms/button";
import { IGetProjectResponse } from "@/app/core/application/dto/projects/get-id/projects-response.dto";
import { useEffect } from "react";

interface IProjectsFormProps {
    projectID?: number;
    toggleModal: () => void;
};

const servicesSchema = yup.object().shape({
    title: yup
        .string()
        .required('El título es obligatorio.'),
    description: yup
        .string()
        .required('La descripción es obligatoria.'),
    startDate: yup
        .date()
        .required('La fecha es obligatoria'),
    endDate: yup
        .date()
        .required('La fecha es obligatoria')
});

export const ProjectsForm = ({ projectID, toggleModal }: IProjectsFormProps) => {

    const router = useRouter();

    const { control, handleSubmit, setError, formState: { errors }, setValue } = useForm<ICreateProjectRequest>({ mode: "onChange", reValidateMode: "onChange", resolver: yupResolver(servicesSchema) });

    useEffect(() => {

        if (projectID) {

            const fetchProjectID = async () => {

                try {
                    const response = await fetch(`/api/projects/get/${projectID}`);
                    const data: IGetProjectResponse = await response.json();

                    setValue('title', data.data.title);
                    setValue('description', data.data.description);
                    setValue('startDate', data.data.startDate);
                    setValue('endDate', data.data.endDate);

                } catch (error) {
                    console.log(error);
                }
            };

            fetchProjectID();
        }
    }, [projectID]);

    const handleProject = async (data: ICreateProjectRequest) => {

        try {

            if (projectID) {
                
                const response = await fetch(`/api/projects/update/${projectID}`, {
                    method: "PATCH",
                    body: JSON.stringify(data)
                });

                if (!response) {
                    console.log('Error el enviar el formulario');
                };

            } else {
                const response = await fetch('/api/projects/create', {
                    method: "POST",
                    body: JSON.stringify(data),
                });

                if (!response) {
                    console.log('Error el enviar el formulario');
                };
            }

            router.refresh();
            toggleModal();


        } catch (error) {
            console.log(error);
        };
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(handleProject)}>

            <FormField<ICreateProjectRequest>
                control={control}
                type="text"
                label="Título:"
                name="title"
                error={errors.title}
                placeholder="Ingresa el título del proyecto"
            />

            <FormField<ICreateProjectRequest>
                control={control}
                type="text"
                label="Descripción:"
                name="description"
                error={errors.description}
                placeholder="Ingresa la descripción del servicio"
            />

            <FormField<ICreateProjectRequest>
                control={control}
                type="date"
                label="Fecha de inicio:"
                name="startDate"
                error={errors.startDate}
            />

            <FormField<ICreateProjectRequest>
                control={control}
                type="date"
                label="Fecha de finalización:"
                name="endDate"
                error={errors.endDate}
            />

            <Button type="submit" className={styles.button}>Enviar</Button>

        </form>
    );
};