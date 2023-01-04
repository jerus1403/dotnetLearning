import randomstring from "randomstring";

import { StoreType } from "../State/store";
import { clearCurrentContext, setCurrentContext } from "../State/UserView/UserViewActions";
import { currentContextSelector } from "../State/UserView/UserViewSelectors";


export const createContext = (store: StoreType): void => {
    let creatingContext = false;

    const process = (): void => {
        const state = store.getState();
        const currentContext = currentContextSelector(state);
        if (creatingContext && currentContext) {

            //Waiting for context to be created but it is created, so stop waiting
            creatingContext = false;

        } else if (!creatingContext && !currentContext) {

            //Not currently creating a context but there isn't one, so make one
            creatingContext = true;
            store.dispatch(setCurrentContext(randomstring.generate(10)));
        }
    };

    store.subscribe(process);
    process();
}