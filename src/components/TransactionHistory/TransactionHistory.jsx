import PropTypes from 'prop-types';
import { Table, Head, Division, Titles, Body, Info } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
return (
    <Table>
  <Head>
  <tr>
      <Titles>Type</Titles>
      <Titles>Amount</Titles>
      <Titles>Currency</Titles>
  </tr>
  </Head>

  <Body>
    {items.map(item => <Division key={item.id}>
      <Info>{item.type}</Info>
      <Info>{item.amount}</Info>
      <Info>{item.currency}</Info>
    </Division>)}
  </Body>
</Table>
)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}