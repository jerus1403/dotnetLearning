import { Button, Card, Image } from "semantic-ui-react";

import { IActivity } from "../../../app/models";

interface IActivityDetailsProps {
    activity: IActivity;
    cancelSelectedActivity: () => void;
    formOpen: (id: string) => void;
}

export const ActivityDetails = (props: IActivityDetailsProps) => {
    const {
        activity,
        cancelSelectedActivity,
        formOpen,
    } = props;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={"2"}>
                    <Button
                        basic
                        color="blue"
                        content="Edit"
                        onClick={() => formOpen(activity.id)}
                    />
                    <Button
                        basic
                        color="grey"
                        content="Cancel"
                        onClick={cancelSelectedActivity}
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    );
};