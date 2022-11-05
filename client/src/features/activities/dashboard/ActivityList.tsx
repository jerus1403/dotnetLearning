import { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";

//Component Imports and etc.
import { IActivity } from "../../../app/models";

interface IActivityListProps {
    activities: IActivity[];
    selectActivityHandler: (selectedId: string) => void;
    deleteActivityHandler: (deleteId: string) => void;
    isSubmitting: boolean;
}

export const ActivityList = (props: IActivityListProps) => {
    const {
        activities,
        selectActivityHandler,
        deleteActivityHandler,
        isSubmitting,
    } = props;
    const [deleteTarget, setDeleteTarget] = useState('');

    const deleteTargetHandler = (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => {
        setDeleteTarget(e.currentTarget.name);
        deleteActivityHandler(activityId);
    };

    return (
        <Segment>
            <Item.Group divided>
                {activities.map((activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as={"a"}>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    floated="right"
                                    content="View"
                                    color="blue"
                                    onClick={() => selectActivityHandler(activity.id)}
                                />
                                <Button
                                    name={activity.id}
                                    loading={isSubmitting && deleteTarget === activity.id}
                                    floated="right"
                                    content="Delete"
                                    color="red"
                                    onClick={(e: SyntheticEvent<HTMLButtonElement>) => deleteTargetHandler(e, activity.id)}
                                />
                                <Label
                                    basic
                                    content={activity.category}
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
};