"use client";

import { Input } from "@/ui/atoms/input/input";
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import styles from "./form-field.module.scss";

interface FormFieldProps<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
};

export const FormField = <T extends FieldValues>({ label, type, name, control, error, id, placeholder }: FormFieldProps<T>) => {

    return (
        <div className={styles.fieldContainer}>
            <label htmlFor={id || label.toLowerCase()} className={styles.label}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        id={id || label.toLowerCase()}
                        type={type} 
                        error={error?.message}
                        placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
                        {...field}
                    />
                )}
            />
        </div>
    );
};