import { Grid } from "semantic-ui-react";

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
    createOrEdit: (activity: IActivity) => void;
    deleteActivityHandler: (deleteId: string) => void;
    isFormSubmitting: boolean;
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
        createOrEdit,
        deleteActivityHandler,
        isFormSubmitting,
    } = props;

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList
                    activities={activities}
                    selectActivityHandler={selectActivityHandler}
                    deleteActivityHandler={deleteActivityHandler}
                    isSubmitting={isFormSubmitting}
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
                        selectedActivity={selectedActivity}
                        formClose={formClose}
                        createOrEdit={createOrEdit}
                        isFormSubmitting={isFormSubmitting}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
};