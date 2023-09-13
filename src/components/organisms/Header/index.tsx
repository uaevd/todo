import styled from '@emotion/styled';

import { AppTitle } from 'components/atoms/AppTitle';

const Container = styled.div`
    position: absolute;
    inset: 0 0 auto 0;
    text-align: center;
    background-color: #304ffe;
    padding: 8px 0;
    margin: 0;
`;

export const Header = () => (
    <Container>
        <AppTitle />
    </Container>
);
