import {
    Button,
    Container,
    Menu,
} from "semantic-ui-react";

interface INavBarProps {
    formOpen: () => void;
}

export const NavBar = (props: INavBarProps) => {
    const {
        formOpen,
    } = props;

    return (
        <Menu
            inverted
            fixed="top"
        >
            <Container>
                <Menu.Item header>
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        style={{ marginRight: "10px" }}
                    />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button
                        positive
                        content="Create Activity"
                        onClick={() => formOpen()}
                    />
                </Menu.Item>
            </Container>
        </Menu>
    );
};