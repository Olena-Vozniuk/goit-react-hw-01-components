import PropTypes from 'prop-types';
import { DescriptionStyle, Avatar, Name, Tag, Location } from './Description.styled';

export const Description = ({ avatar, username, tag, location }) => {
    return <DescriptionStyle>
        <Avatar
    src={avatar}
    alt="User avatar"
    className="avatar"
    />
  <Name>{username}</Name>
  <Tag>@{tag}</Tag>
  <Location>{location}</Location> 
  </DescriptionStyle>     
}

Description.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
