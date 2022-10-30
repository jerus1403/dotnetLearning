import { Grid, List } from "semantic-ui-react";

//Component imports and etc.
import { IActivity } from "../../../app/models";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

interface IActivityDashBoardProps {
    activities: IActivity[];
    selectedActivity: IActivity | undefined;
    selectActivityHandler: (selectedId: string) => void;
    cancelSelectedActivity: () => void;
    formOpen: (id: string) => void;
    formClose: () => void;
    editMode: boolean;
}

export const ActivityDashboard = (props: IActivityDashBoardProps) => {
    const {
        activities,
        selectedActivity,
        selectActivityHandler,
        cancelSelectedActivity,
        formOpen,
        formClose,
        editMode,
    } = props;

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList
                    activities={activities}
                    selectActivityHandler={selectActivityHandler}
                />
            </Grid.Column>
            <Grid.Column width={'6'}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectedActivity={cancelSelectedActivity}
                        formOpen={formOpen}
                    />
                )}
                {editMode && (
                    <ActivityForm
                        activity={selectedActivity}
                        formClose={formClose}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
};