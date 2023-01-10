import { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './style.css';
import { NavBar } from './NavBar';
import { useDispatch } from 'react-redux';
import { getSelectedActivity } from '../../State/Activities/ActivitiesActions';
import { HomePage } from '../../features/home/HomePage';
import { ActivityPage } from '../../features/activities/ActivityPage';
import {
  createActivityInitiate,
  getActivityDetailsInitiate,
  updateActivityInitiate,
} from '../../Sagas/GetActivities/ActivitiesActions';
import { IActivity } from '../models';
import { CreateActivityPage } from '../../features/activities/CreateActivityPage';
import { ActivityDetailsPage } from '../../features/activities/ActivityDetailsPage';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelSelectedActivity = () => {
    dispatch(getSelectedActivity(null));
  };

  const doneCreateOrEdit = (activity: IActivity) => {
    dispatch(getSelectedActivity(activity));
  };

  const setTimeoutBeforeNavigate = (activityId: string) => {
    setTimeout(() => {
      navigate(`/activities/${activityId}`);
    }, 500);
  };

  const createOrEditActivityHandler = (activity: IActivity) => {
    if (activity.id) {
      dispatch(updateActivityInitiate(activity));
      doneCreateOrEdit(activity);
      setTimeoutBeforeNavigate(activity.id);
    } else {
      activity.id = uuid();
      dispatch(createActivityInitiate(activity));
      doneCreateOrEdit(activity);
      setTimeoutBeforeNavigate(activity.id);
    }
  };

  const formCloseHandler = (id: string) => {
    navigate(`/activities/${id}`);
  };

  const formOpenHandler = (id: string) => {
    dispatch(getActivityDetailsInitiate(id));
  };

  return (
    <Fragment>
      {location.pathname === "/"
        ? <HomePage />
        : (
          <>
            <NavBar
              formOpen={cancelSelectedActivity}
            />
            <Container style={{ marginTop: "7em" }}>
              <Routes>
                <Route
                  path='/'
                  element={<HomePage />}
                />
                <Route
                  path='/activities'
                  element={
                    <ActivityPage />
                  }
                />
                <Route
                  path='/activities/:id'
                  element={
                    <ActivityDetailsPage
                      cancelSelectedActivity={cancelSelectedActivity}
                      formOpenHandler={formOpenHandler}
                    />
                  }
                />
                {['/createActivity', '/edit/:id'].map((path: string, idx: number) => (
                  <Route
                    key={location.key}
                    path={path}
                    element={
                      <CreateActivityPage
                        formCloseHandler={formCloseHandler}
                        createOrEditActivityHandler={createOrEditActivityHandler}
                      />
                    }
                  />
                ))}
              </Routes>
            </Container>
          </>
        )
      }
    </Fragment>
  );
};

export default App;
