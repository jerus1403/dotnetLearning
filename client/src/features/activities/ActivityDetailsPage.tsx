import { useSelector } from "react-redux";

import { LoadingComponent } from "../../app/layout/Loading";
import {
    loadingSelectedActivitySelector,
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
    const loadingSelectedActivity = useSelector(loadingSelectedActivitySelector);

    if (loadingSelectedActivity) {
        return <LoadingComponent content="Loading..." />;
    }

    return (
        <ActivityDetails
            selectedActivity={selectedActivity}
        />
    );
};