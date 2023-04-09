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
import { useLocation } from "react-router-dom";


interface ICreateActivityPageProps {
    formCloseHandler: (id: string) => void;
    createOrEditActivityHandler: (activity: IActivity) => void;
}

export const CreateActivityPage = (props: ICreateActivityPageProps) => {
    const {
        createOrEditActivityHandler,
        formCloseHandler,
    } = props;

    const location = useLocation();

    const selectedActivity = useSelector(selectedActivitySelector);
    const loadingSelectedActivity = useSelector(loadingSelectedActivitySelector);
    const loading = useSelector(loadingSelector);

    const initialActivityValues = {
        id: "",
        title: "",
        date: null,
        description: "",
        category: "",
        city: "",
        venue: "",
    }

    const [activity, setActivity] = useState<IActivity>(initialActivityValues);

    useEffect(() => {
        if (location.pathname === "/createActivity" && selectedActivity === null) {
            setActivity(initialActivityValues);
        }
        if (selectedActivity && location.pathname !== "/createActivity") {
            setActivity(selectedActivity);
        }
    }, [location.pathname, selectedActivity]);

    const submitFormHandler = (formActivity: IActivity) => {
        createOrEditActivityHandler(formActivity);
    };

    if (loadingSelectedActivity) return <LoadingComponent content="Loading app" />;
    return (
        <ActivityForm
            loadingSubmission={loading}
            submitFormHandler={submitFormHandler}
            selectedActivity={activity}
            formClose={formCloseHandler}
        />
    );
};