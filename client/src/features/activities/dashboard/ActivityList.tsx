
import { Fragment } from "react";
import { Header } from "semantic-ui-react";

//Component Imports and etc.
import { IActivity, IActivityGroup } from "../../../app/models";
import { ActivityListItem } from "./ActivityListItem";

interface IActivityListProps {
    activityGroups: IActivityGroup[];
    goToActivityDetails: (id: string) => void;
    deleteActivityHandler: (deleteActivity: IActivity) => void;
    loading: boolean;
}

export const ActivityList = (props: IActivityListProps) => {
    const {
        activityGroups,
        deleteActivityHandler,
        goToActivityDetails,
        loading,
    } = props;

    return (
        <>
            {activityGroups.map(g => (
                <Fragment key={g.date}>
                    <Header sub color='teal'>
                        {g.date}
                    </Header>
                    {g.activities.map((activity) => (
                        <ActivityListItem
                            key={activity.id}
                            activity={activity}
                            goToActivityDetails={goToActivityDetails}
                            deleteActivityHandler={deleteActivityHandler}
                            loading={loading}
                        />
                    ))}
                </Fragment>
            ))}
        </>
    );
};