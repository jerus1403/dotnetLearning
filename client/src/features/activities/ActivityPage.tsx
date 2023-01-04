import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

import {
    activitiesSelector,
    loadingActivitiesInitialSelector,
    loadingSelector,
} from "../../State/Activities/ActivitiesSelector";
import { ActivityDashboard } from "./dashboard/ActivityDashboard";
import {
    deleteActivityInitiate, getActivityDetailsInitiate,
} from '../../Sagas/GetActivities/ActivitiesActions';
import { LoadingComponent } from "../../app/layout/Loading";

export const ActivityPage = () => {
    const dispatch = useDispatch();

    const loadingActivitiesIntial = useSelector(loadingActivitiesInitialSelector);
    const activities = useSelector(activitiesSelector);
    const loading = useSelector(loadingSelector);

    const deleteActivityHandler = (activityId: string) => {
        dispatch(deleteActivityInitiate(activityId));
    };

    const goToActivityDetails = (id: string) => {
        dispatch(getActivityDetailsInitiate(id));
    }

    if (loadingActivitiesIntial || loading) return <LoadingComponent content="Loading app" />;

    return (
        <Container style={{ marginTop: "7em" }}>
            <ActivityDashboard
                activities={activities}
                goToActivityDetails={goToActivityDetails}
                deleteActivityHandler={deleteActivityHandler}
            />
        </Container>
    );
};