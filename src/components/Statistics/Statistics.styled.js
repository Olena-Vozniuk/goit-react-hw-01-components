import styled from 'styled-components';

export const Section = styled.section`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: white;
  border: 2px solid darkgray;
  border-radius: 4px;
`;

export const Title = styled.h2`
margin: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 140px;
  column-gap: 4px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

export const Label = styled.span`
font-size: 30px;
padding: 12px;
`;

export const Percentage = styled.span`
font-size: 32px;
`;
