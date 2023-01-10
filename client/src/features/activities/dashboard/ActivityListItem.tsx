import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";

import { IActivity } from "../../../app/models";

interface IActivityListItemProps {
    activity: IActivity;
    goToActivityDetails: (id: string) => void;
    deleteActivityHandler: (deleteActivity: IActivity) => void;
    loading: boolean;
}

export const ActivityListItem = (props: IActivityListItemProps) => {
    const {
        activity,
        goToActivityDetails,
        deleteActivityHandler,
        loading,
    } = props;

    const deleteTargetHandler = (deleteActivity: IActivity) => {
        deleteActivityHandler(deleteActivity);
    };

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header
                                as={Link}
                                to={`/activities/${activity.id}`}
                                onClick={() => goToActivityDetails(activity.id)}
                            >
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Joe</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    color='teal'
                    content='View'
                    floated='right'
                    as={Link}
                    to={`/activities/${activity.id}`}
                    onClick={() => goToActivityDetails(activity.id)}
                />
            </Segment>
        </Segment.Group>
        // <Item key={activity.id}>
        //     <Item.Content>
        //         <Item.Header as={"a"}>{activity.title}</Item.Header>
        //         <Item.Meta>{activity.date}</Item.Meta>
        //         <Item.Description>
        //             <div>{activity.description}</div>
        //             <div>{activity.city}, {activity.venue}</div>
        //         </Item.Description>
        //         <Item.Extra>
        //             <Button
        //                 floated="right"
        //                 content="View"
        //                 color="blue"
        //                 as={Link}
        //                 onClick={() => goToActivityDetails(activity.id)}
        //                 to={`/activities/${activity.id}`}
        //             />
        //             <Button
        //                 loading={loading}
        //                 name={activity.id}
        //                 floated="right"
        //                 content="Delete"
        //                 color="red"
        //                 onClick={(e: SyntheticEvent<HTMLButtonElement>) => deleteTargetHandler(activity)}
        //             />
        //             <Label
        //                 basic
        //                 content={activity.category}
        //             />
        //         </Item.Extra>
        //     </Item.Content>
        // </Item>
    );
};