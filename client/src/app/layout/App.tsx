import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { ToastContainer } from 'react-toastify';

import './style.css';
import { NavBar } from './NavBar';
import { HomePage } from '../../features/home/HomePage';
import { IActivity, IUserFormValues } from '../models';
import { Routers } from './Routers';

import {
  createActivityInitiate,
  getActivityDetailsInitiate,
  updateActivityInitiate,
} from '../../Sagas/GetActivities/ActivitiesActions';
import { loginInitiate } from '../../Sagas/User/UserActions';

import { getSelectedActivity } from '../../State/Activities/ActivitiesActions';

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

  const loginHandler = (userCredentials: IUserFormValues) => {
    dispatch(loginInitiate(userCredentials));
  }

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
              loginHandler={loginHandler}
            />
          </>
        )
      }
    </Fragment>
  );
};

export default App;
