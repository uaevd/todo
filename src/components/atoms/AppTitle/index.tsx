import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`;

export const AppTitle = () => <Container to="/">To-Do List App</Container>;
