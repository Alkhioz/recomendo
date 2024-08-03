import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="text-2xl p-px shadow-lg rounded-full w-10 h-10"
            onClick={() => loginWithRedirect()}
        >
            <i className="fa fa-sign-in" />
        </button>
    );
};

export default LoginButton;