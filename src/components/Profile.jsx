import { Description } from "./Description";
import { Stats } from "./Stats";
import PropTypes from 'prop-types';


export const Profile = ({ user }) => {
    return <div className="profile">
        <Description user={user}/>
        <Stats user={user}/>
  </div>;
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
}


