import { Button, Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { LoadingComponent } from "../../../app/layout/Loading";
import { IActivity } from "../../../app/models";
import { AcitivityDetailHeader } from "./ActivityDetailHeader";
import { AcitivityDetailInfo } from "./ActivityDetailInfo";
import { AcitivityDetailChat } from "./ActivityDetailChat";
import { AcitivityDetailSidebar } from "./ActivityDetailSidebar";

interface IActivityDetailsProps {
    selectedActivity: IActivity | null;
    cancelSelectedActivity: () => void;
    formOpen: (id: string) => void;
}

export const ActivityDetails = (props: IActivityDetailsProps) => {
    const {
        selectedActivity,
        cancelSelectedActivity,
        formOpen,
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
        // <Card fluid>
        //     <Image src={`/assets/categoryImages/${selectedActivity?.category}.jpg`} />
        //     <Card.Content>
        //         <Card.Header>{selectedActivity?.title}</Card.Header>
        //         <Card.Meta>
        //             <span>{selectedActivity?.date}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             {selectedActivity?.description}
        //         </Card.Description>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <Button.Group widths={"2"}>
        //             <Button
        //                 basic
        //                 color="blue"
        //                 content="Edit"
        //                 as={Link}
        //                 to={`/edit/${selectedActivity?.id}`}
        //             />
        //             <Button
        //                 basic
        //                 color="grey"
        //                 content="Cancel"
        //                 as={Link}
        //                 to={`/activities`}
        //             />
        //         </Button.Group>
        //     </Card.Content>
        // </Card>
    );
};