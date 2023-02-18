import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List, Item } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend =>(
             <Item key={friend.id}>
            <FriendListItem avatar= {friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
           </Item>   
            ))
            }
        </List>
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