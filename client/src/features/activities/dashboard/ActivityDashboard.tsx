import { Grid } from "semantic-ui-react";

//Component imports and etc.
import { IActivity, IActivityGroup } from "../../../app/models";
import { ActivityFilters } from "./ActivityFilters";
import { ActivityList } from "./ActivityList";

interface IActivityDashBoardProps {
    activityGroups: IActivityGroup[];
    goToActivityDetails: (id: string) => void;
    deleteActivityHandler: (deleteActivity: IActivity) => void;
    loading: boolean;
}

export const ActivityDashboard = (props: IActivityDashBoardProps) => {
    const {
        activityGroups,
        goToActivityDetails,
        deleteActivityHandler,
        loading,
    } = props;

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList
                    activityGroups={activityGroups}
                    goToActivityDetails={goToActivityDetails}
                    deleteActivityHandler={deleteActivityHandler}
                    loading={loading}
                />
            </Grid.Column>
            <Grid.Column width={'6'}>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    );
};