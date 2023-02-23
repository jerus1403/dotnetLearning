import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './style.css';
import { NavBar } from './NavBar';
import { useDispatch } from 'react-redux';
import { getSelectedActivity } from '../../State/Activities/ActivitiesActions';
import { HomePage } from '../../features/home/HomePage';
import {
  createActivityInitiate,
  getActivityDetailsInitiate,
  updateActivityInitiate,
} from '../../Sagas/GetActivities/ActivitiesActions';
import { IActivity } from '../models';
import { ToastContainer } from 'react-toastify';
import { Routers } from './Routers';

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
      <ToastContainer
        position='bottom-right'
        hideProgressBar
        theme='colored'
      />
      {location.pathname === "/"
        ? <HomePage />
        : (
          <>
            <NavBar
              formOpen={cancelSelectedActivity}
            />
            <Routers
              cancelSelectedActivity={cancelSelectedActivity}
              formOpenHandler={formOpenHandler}
              formCloseHandler={formCloseHandler}
              createOrEditActivityHandler={createOrEditActivityHandler}
            />
          </>
        )
      }
    </Fragment>
  );
};

export default App;
