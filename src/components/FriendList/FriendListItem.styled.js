import styled from 'styled-components';

export const Image = styled.img`
display: block;
width: 48px;
object-fit: contain;
`;

export const Status = styled.span`
background-color: ${props => props.isOnline ? 'green' : 'red'};
margin-top: 38px;
width: 14px;
height: 14px;
border-radius: 50%;
`;
