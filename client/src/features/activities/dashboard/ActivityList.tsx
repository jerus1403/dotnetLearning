import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";

//Component Imports and etc.
import { IActivity } from "../../../app/models";

interface IActivityListProps {
    activities: IActivity[];
    goToActivityDetails: (id: string) => void;
    deleteActivityHandler: (deleteId: string) => void;
}

export const ActivityList = (props: IActivityListProps) => {
    const {
        activities,
        deleteActivityHandler,
        goToActivityDetails,
    } = props;

    const deleteTargetHandler = (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => {
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
                                    as={Link}
                                    onClick={() => goToActivityDetails(activity.id)}
                                    to={`/activities/${activity.id}`}
                                />
                                <Button
                                    name={activity.id}
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