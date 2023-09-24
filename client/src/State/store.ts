import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "../Sagas/RootSaga";
import { AddWatchers } from "../StateWatchers/AddWatchers";
//Reducers
import { userViewReducer } from "./UserView/UserViewReducer";
import { activitiesReducer } from "./Activities/ActivitiesReducer";
import { commonReducer } from "./CommonStore/CommonReducer";
import { userReducer } from "./User/UserReducer";

const sagas = createSagaMiddleware();

export const rootReducer = combineReducers({
    activities: activitiesReducer,
    userView: userViewReducer,
    common: commonReducer,
    user: userReducer,
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