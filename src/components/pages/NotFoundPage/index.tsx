import styled from '@emotion/styled';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #eee;
`;

export const NotFoundPage = () => (
    <Container>
        404
        <br />
        NOT FOUND
    </Container>
);
