import styled from 'styled-components';

export const Image = styled.img`
display: block;
width: 48px;
object-fit: contain;
`;

export const IsOnline = styled.span`
background-color: ${friend => friend.IsOnline ? 'green' : 'red'};
margin-top: 38px;
width: 14px;
height: 14px;
border-radius: 50%;
`;
