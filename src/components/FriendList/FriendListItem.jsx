import PropTypes from 'prop-types';
import { Image, IsOnline } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <>
    <IsOnline>{isOnline}</IsOnline>
    <Image src={avatar} alt="User avatar"/>
    <p className="name">{name}</p>
  </>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

