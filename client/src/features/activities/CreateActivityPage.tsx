import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IActivity } from "../../app/models";
import {
    loadingSelector,
    selectedActivitySelector,
} from "../../State/Activities/ActivitiesSelector";
import { ActivityForm } from "./form/ActivityForm";


interface ICreateActivityPageProps {
    formCloseHandler: (id: string) => void;
    createOrEditActivityHandler: (activity: IActivity) => void;
}

export const CreateActivityPage = (props: ICreateActivityPageProps) => {
    const {
        createOrEditActivityHandler,
        formCloseHandler,
    } = props;

    const selectedActivity = useSelector(selectedActivitySelector);
    const loading = useSelector(loadingSelector);

    const [activity, setActivity] = useState({
        id: "",
        title: "",
        date: "",
        description: "",
        category: "",
        city: "",
        venue: "",
    });

    useEffect(() => {
        if (selectedActivity) {
            setActivity(selectedActivity);
        }
    }, [selectedActivity]);

    const submitHandler = () => {
        createOrEditActivityHandler(activity);
    };

    return (
        <ActivityForm
            submitHandler={submitHandler}
            setActivity={setActivity}
            selectedActivity={activity}
            formClose={formCloseHandler}
        />
    );
};