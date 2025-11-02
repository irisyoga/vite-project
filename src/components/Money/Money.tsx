import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./Money.module.css";
import * as Yup from "yup";

// Типы для данных формы

interface FormValues {
  card: string;
}

// Схема валидации Yup
const validationSchema = Yup.object({
  card: Yup.string()
    .length(4, "Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
});

function ContactMoney() {
  const initialValues: FormValues = {
    card: "",
  };
  const handleSubmit = (values: FormValues) => {
    console.log(" Отправленные данные", values);
    alert(`Сообщение отправлено, ${values.card}`);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Форма обратной связи</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="card">Name</label>
              <Field
                id="card"
                name="card"
                placeholder="Введите номер карты"
                className={styles.input}
              />
              <ErrorMessage
                name="card"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default ContactMoney;

// Ключевые моменты:

// useFormik — это хук, поэтому:

// Следует правилам хуков React

// Схема Yup передается в конфигурацию через свойство validationSchema

// Formik автоматически:

// Выполняет валидацию при изменении значений и потере фокуса

// Сохраняет ошибки в formik.errors

// Отслеживает, какие поля были "тронуты" в formik.touched
