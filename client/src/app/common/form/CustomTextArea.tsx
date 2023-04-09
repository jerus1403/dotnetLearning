import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";


interface ICustomTextArea {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export const CustomTextArea = (props: ICustomTextArea) => {
    const {
        name,
        label,
    } = props;

    const [field, meta] = useField(name);

    return (
        <Form.Field
            error={meta.touched && !!meta.error}
        >
            <label>{label}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label
                    basic
                    color="red"
                >
                    {meta.error}
                </Label>
            ) : null}
        </Form.Field>
    );
};