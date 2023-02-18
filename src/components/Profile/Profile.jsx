import PropTypes from 'prop-types';
import { Description } from "./Description";
import { Stats } from "./Stats";
import { Wrapper } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <Wrapper>
        <Description username={username}
        tag={tag}
        location={location}
        avatar={avatar}/>
        <Stats stats={stats}/>
  </Wrapper>;
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired,
}


