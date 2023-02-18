import styled from 'styled-components';

export const List = styled.ul`
min-width: 350px;
display: flex;
flex-direction: column;
align-items: center;
list-style: none;
`;

export const Item = styled.li`
display: flex;
width: 100%;
gap: 30px;
font-size: 28px;
font-weight: 500;
padding-left: 20px;
border: 1px solid darkgray;
  border-radius: 3px;
  box-shadow: 1px 1px 3px black;
  margin-bottom: 10px;
`;

