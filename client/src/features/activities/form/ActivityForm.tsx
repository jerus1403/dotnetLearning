import { ChangeEvent } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models";

interface IActivityFormProps {
    selectedActivity: IActivity;
    setActivity: (activity: IActivity) => void;
    submitHandler: () => void;
    formClose: (id: string) => void;
    loadingSubmission: boolean;
}

export const ActivityForm = (props: IActivityFormProps) => {
    const {
        selectedActivity,
        formClose,
        setActivity,
        submitHandler,
        loadingSubmission,
    } = props;

    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setActivity({
            ...selectedActivity,
            [name]: value,
        });
    };

    return (
        <Segment clearing>
            <Form
                autoComplete='off'
                onSubmit={submitHandler}
            >
                <Form.Input
                    placeholder={"Title"}
                    name={"title"}
                    value={selectedActivity.title}
                    onChange={inputOnChangeHandler}
                />
                <Form.TextArea
                    placeholder={"Description"}
                    name={"description"}
                    value={selectedActivity.description}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Category"}
                    name={"category"}
                    value={selectedActivity.category}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Date"}
                    type={"date"}
                    name={"date"}
                    value={selectedActivity.date}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"City"}
                    name={"city"}
                    value={selectedActivity.city}
                    onChange={inputOnChangeHandler}
                />
                <Form.Input
                    placeholder={"Venue"}
                    name={"venue"}
                    value={selectedActivity.venue}
                    onChange={inputOnChangeHandler}
                />
                <Button
                    loading={loadingSubmission}
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                />
                <Button
                    floated="right"
                    type="button"
                    content="Cancel"
                    onClick={() => formClose(selectedActivity.id)}
                />
            </Form>
        </Segment>
    );
};