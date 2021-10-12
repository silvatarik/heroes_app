
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router';


export const NavBar = () => {
    const history = useHistory();

    const handleLogout = () => {
        // userContext.dispatch({
        //     type: types.logout
        // })
        // if(userContext?.user){

        // }
        history.replace('/login');
    }
    return (

        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">
                    Heroes APP
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">

                    <Link to="/marvel" className="btn btn-ghost btn-sm rounded-btn">MARVEL</Link>
                    <Link to="/dc" className="btn btn-ghost btn-sm rounded-btn">DC</Link>
                    <Link to="/search" className="btn btn-ghost btn-sm rounded-btn">SEARCH</Link>
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={handleLogout} className="btn btn-square btn-ghost pr-3">LogOut</button>
            </div>
        </div>

    )
}
