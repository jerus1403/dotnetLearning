import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models";

interface IActivityFormProps {
    selectedActivity: IActivity | undefined;
    formClose: () => void;
    createOrEdit: (activity: IActivity) => void;
}

export const ActivityForm = (props: IActivityFormProps) => {
    const {
        selectedActivity,
        formClose,
        createOrEdit,
    } = props;

    const intialActivityState = selectedActivity ?? {
        id: "",
        title: "",
        date: "",
        description: "",
        category: "",
        city: "",
        venue: "",
    };

    const [activity, setActivity] = useState(intialActivityState);

    const submitHandler = () => {
        createOrEdit(activity);
    };

    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setActivity({
            ...activity,
            [name]: value,
        });
    };

    return (
        <Segment clearing>
            <Form
                onSubmit={submitHandler}
            >
                <Form.Input
                    placeholder={"Title"}
                    name={"title"}
                    value={activity.title}
                    onChange={inputOnChangeHandler}
                />
                <Form.TextArea
                    placeholder={"Description"}
                    name={"description"}
                    value={activity && activity.description}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Category"}
                    name={"category"}
                    value={activity && activity.category}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Date"}
                    name={"date"}
                    value={activity && activity.date}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"City"}
                    name={"city"}
                    value={activity && activity.city}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Venue"}
                    name={"venue"}
                    value={activity && activity.venue}
                    onChange={inputOnChangeHandler}
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