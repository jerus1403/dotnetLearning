import { Grid } from "semantic-ui-react";

import { IActivity } from "../../../app/models";
import { AcitivityDetailHeader } from "./ActivityDetailHeader";
import { AcitivityDetailInfo } from "./ActivityDetailInfo";
import { AcitivityDetailChat } from "./ActivityDetailChat";
import { AcitivityDetailSidebar } from "./ActivityDetailSidebar";

interface IActivityDetailsProps {
    selectedActivity: IActivity | null;
}

export const ActivityDetails = (props: IActivityDetailsProps) => {
    const {
        selectedActivity,
    } = props;

    return (
        <Grid>
            <Grid.Column width={10}>
                <AcitivityDetailHeader activity={selectedActivity} />
                <AcitivityDetailInfo activity={selectedActivity} />
                <AcitivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <AcitivityDetailSidebar />
            </Grid.Column>
        </Grid>
    );
};