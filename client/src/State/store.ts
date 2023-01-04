import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { activitiesReducer } from "./Activities/ActivitiesReducer";
import { rootSaga } from "../Sagas/RootSaga";
import { AddWatchers } from "../StateWatchers/AddWatchers";
import { userViewReducer } from "./UserView/UserViewReducer";

const sagas = createSagaMiddleware();

export const rootReducer = combineReducers({
    activities: activitiesReducer,
    userView: userViewReducer,
});

export const getStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagas],
    });
    sagas.run(rootSaga);
    AddWatchers(store);
    return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof getStore>;