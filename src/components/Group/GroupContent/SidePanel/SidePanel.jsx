import Location from "./Location";
import { useAuth } from "../../../../App";
import errorOutline from '../../../../assets/baseline-error_outline-24px.svg';
import RecommendedGroups from "./RecommendedGroups";

export default function SidePanel() {
    const { loggedIn, setLoggedIn } = useAuth();
    
    return (
        <div className="side-panel">
            <Location />
            <span className="location-permission-warning">
                <img src={errorOutline} alt='error symbol'/>
                <p>Your location will help us serve better and extend a personalised experience.</p>
            </span>
            {loggedIn && <RecommendedGroups />}
        </div>
    )
}
