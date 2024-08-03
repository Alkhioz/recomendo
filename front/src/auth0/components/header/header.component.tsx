import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../login-button/login-button.component";
import LogoutButton from "../logout-button/logout-button.component";
import { useEffect } from "react";

const Header = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const init = async () => {
        const token = await getAccessTokenSilently();
        console.log('Token:', token);
    }
    useEffect(() => {
        init();
    }, []);
    return (
        <nav className="bg-white text-blue-950 p-4 flex flex-wrap justify-between items-center shadow-xl">
            <div className="text-xl font-black ">RECOMEND0</div>
            {
                (isLoading || !isAuthenticated) ? <LoginButton />
                    : <div className="flex flex-wrap gap-4 justify-center items-center">
                        {user?.name}
                        <LogoutButton />
                    </div>
            }
        </nav>
    );
};

export default Header;