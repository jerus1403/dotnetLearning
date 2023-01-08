import { Grid } from "semantic-ui-react";

//Component imports and etc.
import { IActivity } from "../../../app/models";
import { ActivityList } from "./ActivityList";

interface IActivityDashBoardProps {
    activities: IActivity[];
    goToActivityDetails: (id: string) => void;
    deleteActivityHandler: (deleteId: string) => void;
    loading: boolean;
}

export const ActivityDashboard = (props: IActivityDashBoardProps) => {
    const {
        activities,
        goToActivityDetails,
        deleteActivityHandler,
        loading,
    } = props;

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList
                    activities={activities}
                    goToActivityDetails={goToActivityDetails}
                    deleteActivityHandler={deleteActivityHandler}
                    loading={loading}
                />
            </Grid.Column>
            <Grid.Column width={'6'}>
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    );
};