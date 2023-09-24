import { ErrorMessage, Form, Formik } from "formik";
import { CustomTextInput } from "../../app/common";
import { Button, Label } from "semantic-ui-react";
import { IUserFormValues } from "../../app/models";

interface ILoginFormProps {
    loginHandler: (userCredentials: IUserFormValues) => void;
    loadingLogin: boolean;
    loginError: string | null;
}

export const LoginForm = (props: ILoginFormProps) => {
    const {
        loginHandler,
        loadingLogin,
        loginError,
    } = props;

    return (
        <Formik
            initialValues={{ email: "", password: "", error: null }}
            onSubmit={(values, { setErrors }) => {
                loginHandler(values);
                setErrors({ error: `${loginError} - Invalid email or password` })
            }}
        >
            {
                ({ handleSubmit, errors }) => (
                    <Form
                        className="ui form"
                        onSubmit={handleSubmit}
                        autoComplete="off"
                    >
                        <CustomTextInput
                            placeholder="Email"
                            name="email"
                        />
                        <CustomTextInput
                            placeholder="Password"
                            name="password"
                            type="password"
                        />
                        <ErrorMessage
                            name="error"
                            render={() => (
                                <Label
                                    style={{ marginBottom: 10 }}
                                    basic
                                    color="red"
                                    content={errors.error}
                                />
                            )}
                        />
                        <Button
                            loading={loadingLogin}
                            positive
                            content="Login"
                            type="submit"
                            fluid
                        />
                    </Form>
                )
            }
        </Formik>
    );
}