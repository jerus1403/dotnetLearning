import { Segment, Grid, Icon } from 'semantic-ui-react';
import { format } from 'date-fns';

import { IActivity } from '../../../app/models';

interface IActivityDetailInfoProps {
    activity: IActivity | null;
}

export const AcitivityDetailInfo = (props: IActivityDetailInfoProps) => {
    const {
        activity,
    } = props;

    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{activity?.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>
                            {format(activity?.date!, 'dd MMM yyyy h:mm aa')}
                        </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{activity?.venue}, {activity?.city}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    );
};