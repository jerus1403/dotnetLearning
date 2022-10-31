import { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

import './style.css';
import { IActivity } from '../models/activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../features';


function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.log(err));
  }, []);

  const selectActivityHandler = (selectedId: string) => {
    const selected = activities.find(activity => activity.id === selectedId);
    setSelectedActivity(selected);
  };

  const cancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };

  const formOpenHandler = (id?: string) => {
    id ? selectActivityHandler(id) : cancelSelectedActivity();
    setEditMode(true);
  };

  const formCloseHandler = () => {
    setEditMode(false);
  };

  const createOrEditActivityHandler = (activity: IActivity) => {
    activity.id
      ? setActivities([...activities.filter(a => a.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const deleteActivityHandler = (activityId: string) => {
    setActivities([...activities.filter(a => a.id !== activityId)]);
  };

  return (
    <Fragment>
      <NavBar
        formOpen={formOpenHandler}
      />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivityHandler={selectActivityHandler}
          cancelSelectedActivity={cancelSelectedActivity}
          editMode={editMode}
          formOpen={formOpenHandler}
          formClose={formCloseHandler}
          createOrEdit={createOrEditActivityHandler}
          deleteActivityHandler={deleteActivityHandler}
        />
      </Container>
    </Fragment>
  );
};

export default App;
