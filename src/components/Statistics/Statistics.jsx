import PropTypes from 'prop-types';
import { Section, Title, List, Item, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from '../../Utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
    return (
    <Section>
    {title && <Title>{title}</Title>}
  
    <List>
        {stats.map(stat => (
        <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
      </Item>
      ))}
    </List>
  </Section>
 );
};

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
};

