import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend =>(
             <li className="item" key={friend.id}>
            <FriendListItem avatar= {friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
           </li>   
            ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
  };