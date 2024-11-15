"use client";

import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dto/auth/login-request.dto";
import { FormField } from "@/ui/molecules/form-field/form-field";
import { signIn } from "next-auth/react";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Title from "@/ui/atoms/title";
import Button from "@/ui/atoms/button";
import * as yup from "yup";
import styles from "./login-form.module.scss";
import Text from "@/ui/atoms/text";
import Link from "next/link";


const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('El correo es inválido.')
        .required('El correo es obligatorio.'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos ocho caracteres.')
        .required('La contraseña es obligatoria.')
});

export const LoginForm = () => {

    const { control, handleSubmit, setError, formState: { errors } } = useForm<ILoginRequest>({ mode: "onChange", reValidateMode: "onChange", resolver: yupResolver(loginSchema) });

    const router = useRouter();

    const handleLogin = async (data: ILoginRequest) => {

        console.log(data);

        try {

            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password
            });

            if (result?.error) {
                console.log("Ocurrió un error:", JSON.parse(result.error));
                handleError(JSON.parse(result.error));
                return;
            };

            console.log("Autenticación exitosa");
            router.push("/dashboard/projects");

        } catch (error) {
            console.log(error);
        }
    };

    const handleError = (error: unknown) => {

        const erroData = error as ErrorResponse;

        if (erroData && erroData.errors) {

            if (Array.isArray(erroData.errors) && "field" in erroData.errors[0]) {

                erroData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequest, { message: error });
                });

            } else {

                if ("message" in erroData.errors[0]) {
                    setError("email", { message: erroData.errors[0].message, });
                };
            };
        };
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(handleLogin)}>

            <div className={styles.header}>
                <Title level={2} className={styles.title}>Iniciar Sesión</Title>
                <Text className={styles.text}>Ingresa tus credenciales para acceder a tu cuenta</Text>
            </div>

            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico:"
                name="email"
                error={errors.email}
                placeholder="Ingresa tu correo electrónico"
            />

            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña:"
                name="password"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />

            <Button type="submit" className={styles.button}>Iniciar Sesión</Button>


            <div className={styles.redirect}>
                <Link href={"/home"} className={styles.link}>¿Olvidaste tu contraseña?</Link>
                <Text>¿No tienes una cuenta? <Link href={"/register"} className={styles.link}>Registrate aquí</Link></Text>
            </div>

        </form>
    );
};