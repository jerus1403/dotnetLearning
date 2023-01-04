import { useSelector } from "react-redux";

import { LoadingComponent } from "../../app/layout/Loading";
import {
    loadingSelector,
    selectedActivitySelector,
} from "../../State/Activities/ActivitiesSelector";
import { ActivityDetails } from "./details/ActivityDetails";

interface IActivityDetailsPageProps {
    cancelSelectedActivity: () => void;
    formOpenHandler: (id: string) => void;
}

export const ActivityDetailsPage = (props: IActivityDetailsPageProps) => {
    const {
        cancelSelectedActivity,
        formOpenHandler,
    } = props;

    const selectedActivity = useSelector(selectedActivitySelector);
    const loading = useSelector(loadingSelector);

    if (loading) {
        return <LoadingComponent content="Loading..." />;
    }

    return (
        <ActivityDetails
            selectedActivity={selectedActivity}
            cancelSelectedActivity={cancelSelectedActivity}
            formOpen={formOpenHandler}
        />
    );
};