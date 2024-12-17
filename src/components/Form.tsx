import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {roles, workBorders, formSchema, formSchemaT} from "./config";
import "../styles/Form.css";
import {useState} from "react";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<formSchemaT>({resolver: zodResolver(formSchema)});

    const onSubmit = (data: FieldValues) => {
        if (selectedFile) {
            console.log(selectedFile);
        } else {
            console.log("No selected files.");
        }
        alert(JSON.stringify(data));
        reset();
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    }

    return (
        <section>
            <form className="form__inner" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__left">
                    <div className="form__item">
                        <label>Имя:</label>
                        <input {...register("name")} className="form__input"/>
                        {errors.name && (
                            <p className="errorMsg">`{`${errors.name.message}`}</p>
                        )}
                    </div>
                    <div className="form__item">
                        <label>Фамилия:</label>
                        <input {...register("surname")} className="form__input"/>
                        {errors.surname && (
                            <p className="errorMsg">`{`${errors.surname.message}`}</p>
                        )}
                    </div>

                    <div className="form__item">
                        <label>Отчество:</label>
                        <input {...register("patronymic")} className="form__input"/>
                        {errors.patronymic && (
                            <p className="errorMsg">`{`${errors.patronymic.message}`}</p>
                        )}
                    </div>

                    <div className="form__item">
                        <label>Роль:</label>
                        <select {...register("roles")} className="form__select">
                            {Object.entries(roles).map(([role, value]) => (
                                <option key={role} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        {errors.roles && (
                            <p className="errorMsg">`{`${errors.roles.message}`}</p>
                        )}
                    </div>
                    <button className="formBtn">Назад</button>
                </div>
                <div className="form__right">
                    <div className="form__item">
                        <label>Кличка:</label>
                        <select {...register("workBorders")} className="form__select">
                            {Object.entries(workBorders).map(([id, value]) => [
                                <option key={id} value={value}>
                                    {value}
                                </option>,
                            ])}
                        </select>
                        {errors.workBorders && (
                            <p className="errorMsg">`{`${errors.workBorders.message}`}</p>
                        )}
                    </div>

                    <div className="form__item">
                        <label>Загрузить фото:</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="form__input"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="form__item">
                        <label>Пароль:</label>
                        <input
                            {...register("password")}
                            type="password"
                            className="form__input"
                        />
                        {errors.password && (
                            <p className="errorMsg">`{`${errors.password.message}`}</p>
                        )}
                    </div>

                    <button type="submit" className="formBtn" disabled={isSubmitting}>
                        Создать пользователя
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
