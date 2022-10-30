import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models";

interface IActivityFormProps {
    activity: IActivity | undefined;
    formClose: () => void;
}

export const ActivityForm = (props: IActivityFormProps) => {
    const {
        activity,
        formClose,
    } = props;

    return (
        <Segment clearing>
            <Form>
                <Form.Input
                    placeholder={"Title"}
                    value={activity && activity.title}
                />
                <Form.TextArea
                    placeholder={"Description"}
                    value={activity && activity.description}
                />
                <Form.Input
                    placeholder={"Category"}
                    value={activity && activity.category}
                />
                <Form.Input
                    placeholder={"Date"}
                    value={activity && activity.date}
                />
                <Form.Input
                    placeholder={"City"}
                    value={activity && activity.city}
                />
                <Form.Input
                    placeholder={"Venue"}
                    value={activity && activity.venue}
                />
                <Button
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                />
                <Button
                    floated="right"
                    type="button"
                    content="Cancel"
                    onClick={formClose}
                />
            </Form>
        </Segment>
    );
};