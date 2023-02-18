import PropTypes from 'prop-types';
import { List, Item, Label } from './Stats.styled';

export const Stats = ({ stats: {followers, views, likes} }) => {
    return <List>
    <Item>
      <Label>Followers</Label>
      <span className="quantity">{followers}</span>
    </Item>
    <Item>
      <Label>Views</Label>
      <span className="quantity">{views}</span>
    </Item>
    <Item>
      <Label>Itemkes</Label>
      <span className="quantity">{likes}</span>
    </Item>
  </List>
}

Stats.propTypes = {
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  }).isRequired,
}


