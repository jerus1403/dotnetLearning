import { useSelector } from "react-redux";
import { serverErrorSelector } from "../../State/CommonStore/CommonSelector";
import { ServerError } from "../errors/ServerError";

export const ServerErrorPart = () => {
    const serverError = useSelector(serverErrorSelector);
    return (
        <ServerError error={serverError} />
    );
};