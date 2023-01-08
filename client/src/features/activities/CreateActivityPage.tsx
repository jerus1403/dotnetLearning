import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { LoadingComponent } from "../../app/layout/Loading";
import { IActivity } from "../../app/models";
import {
    loadingSelectedActivitySelector,
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
    const loadingSelectedActivity = useSelector(loadingSelectedActivitySelector);
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

    if (loadingSelectedActivity) return <LoadingComponent content="Loading app" />;
    return (
        <ActivityForm
            loadingSubmission={loading}
            submitHandler={submitHandler}
            setActivity={setActivity}
            selectedActivity={activity}
            formClose={formCloseHandler}
        />
    );
};