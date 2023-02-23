import { Message } from "semantic-ui-react";

interface IValidationErrorProps {
    errors: string[];
}

export const ValidationError = (props: IValidationErrorProps) => {
    const {
        errors,
    } = props;
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((err: string, idx: number) => (
                        <Message.Item key={idx}>
                            {err}
                        </Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    );
};