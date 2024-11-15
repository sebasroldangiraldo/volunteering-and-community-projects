import styles from "./input-select.module.scss";

interface InputSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string, label: string }[];
    placeholder?: string;
    error?: string;
    name?: string;
};

const InputSelect = ({ options, placeholder = "Selecciona una opción", error, name, ...props }: InputSelectProps) => {

    return (
        <div className={styles.selectContainer}>
            <select name={name} className={`${styles.select} ${error && styles.selectError}`} {...props}>
                <option>{placeholder}</option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default InputSelect;