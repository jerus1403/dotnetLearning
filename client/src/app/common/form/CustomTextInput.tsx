import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";


interface ICustomTextInput {
    placeholder: string;
    name: string;
    label?: string;
}

export const CustomTextInput = (props: ICustomTextInput) => {
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
            <input {...field} {...props} />
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