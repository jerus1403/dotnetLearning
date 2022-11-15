import { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

import './style.css';
import { IActivity } from '../models/activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../features';
import { LoadingComponent } from './Loading';
import {
  activitiesSelector,
  selectedActivitySelector,
  loadingActivitiesSelector,
  loadingSelectedActivitySelector,
  editModeSelector,
  loadingSelector,
} from '../../State/Activities/ActivitiesSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedActivity, setEditMode, setLoading } from '../../State/Activities/ActivitiesActions';
import {
  createActivityInitiate,
  deleteActivityInitiate,
  updateActivityInitiate,
} from '../../Sagas/GetActivities/ActivitiesActions';

function App() {
  const dispatch = useDispatch();

  const activityList = useSelector(activitiesSelector);
  const isLoadingActivities = useSelector(loadingActivitiesSelector);
  const selectedActivity = useSelector(selectedActivitySelector);
  const loadingSelectedActivity = useSelector(loadingSelectedActivitySelector);
  const editMode = useSelector(editModeSelector);
  const isLoading = useSelector(loadingSelector);

  const selectActivityHandler = (selectedId: string) => {
    const foundSelectedActivity = activityList && activityList?.find(a => a.id === selectedId);
    if (foundSelectedActivity) {
      dispatch(getSelectedActivity(foundSelectedActivity));
    }
  };

  const cancelSelectedActivity = () => {
    dispatch(getSelectedActivity(undefined));
  };

  const formOpenHandler = (id?: string) => {
    id ? selectActivityHandler(id) : cancelSelectedActivity();
    dispatch(setEditMode(true));
  };

  const formCloseHandler = () => {
    dispatch(setEditMode(false));
  };

  const doneCreateOrEdit = (activity: IActivity) => {
    dispatch(getSelectedActivity(activity));
    dispatch(setEditMode(false));
    dispatch(setLoading(false));
  };

  const createOrEditActivityHandler = (activity: IActivity) => {
    dispatch(setLoading(true));
    if (activity.id) {
      dispatch(updateActivityInitiate(activity));
      doneCreateOrEdit(activity);
    } else {
      activity.id = uuid();
      dispatch(createActivityInitiate(activity));
      doneCreateOrEdit(activity);
    }
  };

  const deleteActivityHandler = (activityId: string) => {
    dispatch(setLoading(true));
    dispatch(deleteActivityInitiate(activityId));
    dispatch(setLoading(false));
  };

  if (isLoadingActivities || isLoading) return <LoadingComponent content="Loading app" />;

  return (
    <Fragment>
      <NavBar
        formOpen={formOpenHandler}
      />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activityList || []}
          selectedActivity={selectedActivity}
          loadingSelectedActivity={loadingSelectedActivity}
          selectActivityHandler={selectActivityHandler}
          cancelSelectedActivity={cancelSelectedActivity}
          editMode={editMode}
          formOpen={formOpenHandler}
          formClose={formCloseHandler}
          createOrEdit={createOrEditActivityHandler}
          deleteActivityHandler={deleteActivityHandler}
          isFormSubmitting={isLoading}
        />
      </Container>
    </Fragment>
  );
};

export default App;
