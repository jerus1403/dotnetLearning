import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Header, Segment } from "semantic-ui-react";

import { IActivity } from "../../../app/models";
import {
    CustomTextInput,
    CustomTextArea,
    CustomSelectInput,
    CustomDateInput,
} from "../../../app/common";
import { categoryOptions } from "../../../app/common/constants";

interface IActivityFormProps {
    selectedActivity: IActivity;
    submitFormHandler: (activity: IActivity) => void;
    formClose: (id: string) => void;
    loadingSubmission: boolean;
}

export const ActivityForm = (props: IActivityFormProps) => {
    const {
        selectedActivity,
        formClose,
        submitFormHandler,
        loadingSubmission,
    } = props;

    const validationSchema = Yup.object({
        title: Yup.string().required("The activity title is required!"),
        description: Yup.string().required("The activity description is required!"),
        category: Yup.string().required("The activity category is required!"),
        date: Yup.string().required("The activity date is required!"),
        city: Yup.string().required("The activity city is required!"),
        venue: Yup.string().required("The activity venue is required!"),
    });

    return (
        <Segment clearing>
            <Header content="Activity Details" color="teal" />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={selectedActivity}
                onSubmit={(values) => submitFormHandler(values)}
            >
                {({ handleSubmit, isSubmitting, isValid, dirty }) => {
                    return (
                        <Form
                            className="ui form"
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <CustomTextInput
                                name={"title"}
                                placeholder={"Title"}
                            />
                            <CustomTextArea
                                placeholder={"Description"}
                                name={"description"}
                                rows={3}
                            />
                            <CustomSelectInput
                                placeholder={"Category"}
                                name={"category"}
                                options={categoryOptions}
                            />
                            <CustomDateInput
                                placeholderText={"Date"}
                                name={"date"}
                                showTimeSelect
                                timeCaption={"time"}
                                dateFormat={"MMMM d, yyyy h:mm aa"}
                            />
                            <Header content="Location Details" color="teal" />
                            <CustomTextInput
                                placeholder={"City"}
                                name={"city"}
                            />
                            <CustomTextInput
                                placeholder={"Venue"}
                                name={"venue"}
                            />
                            <Button
                                disabled={!isValid || isSubmitting || !dirty}
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
                    );
                }}
            </Formik>
        </Segment>
    );
};