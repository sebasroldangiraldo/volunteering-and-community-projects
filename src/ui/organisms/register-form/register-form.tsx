'use client';

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormField } from "@/ui/molecules/form-field/form-field";
import { FormSelectField } from "@/ui/molecules/form-select-field/form-select-field";
import { FormFileField } from "@/ui/molecules/form-file-field/form-file-field";
import Button from "@/ui/atoms/button";
import { IRegisterRequest } from "@/app/core/application/dto/auth/register-request.dto";
import Title from "@/ui/atoms/title";
import Text from "@/ui/atoms/text";
import styles from "./register-form.module.scss";

const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('El correo es inválido.')
        .required('El correo es obligatorio.'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres.')
        .required('La contraseña es obligatoria.'),
    name: yup
        .string()
        .min(1, 'El nombre de usuario debe tener al menos 1 caracter.')
        .required('El nombre de usuario es obligatorio.'),
    role: yup
        .string()
        .required('El rol es obligatorio.'),
    photo: yup
        .mixed<File>()
        .nullable()
        .required('La foto de perfil es obligatoria.')
});

const RegisterForm = () => {

    const router = useRouter();

    const { control, handleSubmit, setError, formState: { errors } } = useForm<IRegisterRequest>({ mode: "onChange", reValidateMode: "onChange", resolver: yupResolver(registerSchema) });

    const handleRegister = async (data: IRegisterRequest) => {

        try {

            const formData = new FormData();

            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("name", data.name);
            formData.append("role", data.role);

            if (data.photo instanceof File) {
                formData.append("photo", data.photo);
            } else {
                console.log("La imagen no es un archivo válido");
            };

            const response = await fetch("/api/register", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al registrar el usuario");
            }
            console.log('Usuario registrado exitosamente.');
            router.push("/login");
            return await response.json();

        } catch (error) {
            console.error("Error al registar usuario: ", error);
            throw error;
        };
    };

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit(handleRegister)}>

            <div className={styles.header}>
                <Title level={2} className={styles.title}>Registrarse</Title>
                <Text className={styles.text}>Ingresa tus datos para crear tu cuenta</Text>
            </div>

            <FormField<IRegisterRequest>
                control={control}
                type="email"
                name="email"
                label="Email"
                error={errors.email}
                placeholder="Ingresa tu correo electrónico"
            />

            <FormField<IRegisterRequest>
                control={control}
                type="password"
                name="password"
                label="Contraseña:"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />

            <FormField<IRegisterRequest>
                control={control}
                type="text"
                name="name"
                label="Nombre:"
                error={errors.name}
                placeholder="Ingresa tu nombre"
            />

            <FormSelectField<IRegisterRequest>
                control={control}
                options={[
                    { value: "organizer", label: "Organizador" },
                    { value: "user", label: "Usuario" }
                ]}
                name="role"
                label="Rol:"
                error={errors.role}
                placeholder="Ingresa tu rol"
            />

            <FormFileField<IRegisterRequest>
                control={control}
                name="photo"
                label="Foto de Perfil:"
                error={errors.photo}
            />

            <Button type="submit" className={styles.button}>Registrarse</Button>
        </form>
    );
};

export default RegisterForm;