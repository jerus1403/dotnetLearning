import { useSelector } from "react-redux";
import { IUserFormValues } from "../app/models";
import { LoginForm } from "../features";
import { loadingLoginSelector, loginUserErrorSelector, userSelector } from "../State/User/UserSelector";

interface ILoginPageProps {
    loginHandler: (userCredentials: IUserFormValues) => void;
}

export const LoginPage = (props: ILoginPageProps) => {
    const userInfo = useSelector(userSelector);
    const loginErrorMsg = useSelector(loginUserErrorSelector);
    const loginUserLoading = useSelector(loadingLoginSelector);

    console.log(userInfo, 'login page');
    console.log(loginErrorMsg, 'error')
    const {
        loginHandler,
    } = props;
    return (
        <LoginForm
            loginHandler={loginHandler}
            loadingLogin={loginUserLoading}
            loginError={loginErrorMsg}
        />
    );
}