import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="text-2xl p-px shadow-lg rounded-full w-10 h-10"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            <i className="fa fa-sign-out" />
        </button>
    );
};

export default LogoutButton;