import { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

import './style.css';
import { IActivity } from '../models/activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../features';
import { agent } from '../api/agent';
import { LoadingComponent } from './Loading';

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then(response => {
      const activityList = [...response].map(a => ({
        ...a,
        date: a.date.split('T')[0],
      }));
      setActivities(activityList);
      setIsLoading(false);
    });
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

  const doneCreateOrEdit = (activity: IActivity) => {
    setSelectedActivity(activity);
    setEditMode(false);
    setIsSubmitting(false);
  };

  const createOrEditActivityHandler = (activity: IActivity) => {
    setIsSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity]);
        doneCreateOrEdit(activity);
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        doneCreateOrEdit(activity);
      })
    }
  };

  const deleteActivityHandler = (activityId: string) => {
    setIsSubmitting(true);
    agent.Activities.delete(activityId).then(() => {
      setActivities([...activities.filter(a => a.id !== activityId)]);
      setIsSubmitting(false);
    });
  };

  if (isLoading) return <LoadingComponent content="Loading app" />;

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
          isFormSubmitting={isSubmitting}
        />
      </Container>
    </Fragment>
  );
};

export default App;
