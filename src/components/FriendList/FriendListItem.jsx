import PropTypes from 'prop-types';
import { Image, Status } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <>
    <Status isOnline={isOnline} />
    <Image src={avatar} alt="User avatar"/>
    <p className="name">{name}</p>
  </>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

