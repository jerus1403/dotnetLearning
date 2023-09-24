import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { TestErrors } from "../../features";
import { ActivityDetailsPage } from "../../features/activities/ActivityDetailsPage";
import { ActivityPage } from "../../features/activities/ActivityPage";
import { CreateActivityPage } from "../../features/activities/CreateActivityPage";
import { NotFound } from "../../features/errors/NotFound";
import { HomePage } from "../../features/home/HomePage";
import { ServerErrorPart } from "../../features/parts/ServerErrorPart";
import { IActivity, IUserFormValues } from "../models";
import { LoginPage } from "../../pages/LoginPage";

interface IRouterProps {
    cancelSelectedActivity: () => void;
    formOpenHandler: (id: string) => void;
    formCloseHandler: (id: string) => void;
    createOrEditActivityHandler: (activity: IActivity) => void;
    loginHandler: (userCredentials: IUserFormValues) => void;
}

export const Routers = (props: IRouterProps) => {
    const location = useLocation();
    const {
        cancelSelectedActivity,
        formOpenHandler,
        formCloseHandler,
        createOrEditActivityHandler,
        loginHandler,
    } = props;

    return (
        <Container style={{ marginTop: "7em" }}>
            <Routes>
                {/* Home Route */}
                <Route
                    path='/'
                    element={<HomePage />}
                />
                {/* Activities Route */}
                <Route
                    path='/activities'
                    element={
                        <ActivityPage />
                    }
                />
                {/* Activity Details Route */}
                <Route
                    path='/activities/:id'
                    element={
                        <ActivityDetailsPage
                            cancelSelectedActivity={cancelSelectedActivity}
                            formOpenHandler={formOpenHandler}
                        />
                    }
                />
                {/* Create Activity Route */}
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
                {/* Activity Details Route */}
                <Route
                    path='/login'
                    element={
                        <LoginPage
                            loginHandler={loginHandler}
                        />
                    }
                />
                {/* Errors Route */}
                <Route
                    path='/errors'
                    element={
                        <TestErrors />
                    }
                />
                {/* Server Error Route */}
                <Route
                    path='/server-error'
                    element={
                        <ServerErrorPart />
                    }
                />
                {/* Not Found Route */}
                <Route
                    path='/not-found'
                    element={
                        <NotFound />
                    }
                />
                {/* Wild Card Route */}
                <Route
                    path='*'
                    element={
                        <Navigate replace to='/not-found' />
                    }
                />
            </Routes>
        </Container>
    );
};