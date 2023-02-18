import styled from 'styled-components';

export const List = styled.ul`
list-style: none;
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
  padding-left: 0;
`;

export const Item = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-right: 1px solid #dddddd;
  margin-bottom: 0;
  :last-child {
  border-right: none;
}
`;

export const Label = styled.span`
color: grey;
margin-bottom: 5px;
font-size: 16px;
`;
