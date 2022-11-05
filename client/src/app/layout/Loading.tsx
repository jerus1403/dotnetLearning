import { Dimmer, Loader } from "semantic-ui-react";

interface ILoadingComponentProps {
    inverted?: boolean;
    content?: string;
}

export const LoadingComponent = (props: ILoadingComponentProps) => {
    const {
        inverted = true,
        content = 'Loading...'
    } = props;
    return (
        <Dimmer
            active={true}
            inverted={inverted}
        >
            <Loader
                content={content}
            />
        </Dimmer>
    );
};