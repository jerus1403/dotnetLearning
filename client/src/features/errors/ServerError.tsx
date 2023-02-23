import { Container, Header, Segment } from "semantic-ui-react";

import { IServerError } from "../../app/models";

interface IServerErrorProps {
    error: IServerError | null;
}

export const ServerError = (props: IServerErrorProps) => {
    const {
        error,
    } = props;

    return (
        <Container>
            <Header as="h1" content="Server Error" />
            <Header
                sub
                as="h5"
                color="red"
                content={error?.message}
            />
            {error?.details && (
                <Segment>
                    <Header as="h4" content="Stack trace" color="teal" />
                    <code style={{ marginTop: "10px" }}>{error.details}</code>
                </Segment>
            )}
        </Container>
    );
};