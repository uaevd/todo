import styled from '@emotion/styled';

import { PageTitle } from 'components/atoms/PageTitle';
import { Button } from 'components/atoms/Button';
import { InputToDo } from 'components/organisms/InputToDo';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 32px;
    border-radius: 8px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    inset: auto 40px 40px auto;
`;

export const ToDoInput = () => {
    return (
        <Container>
            <Contents>
                <PageTitle title="Add To-Do Item" />
                <InputToDo />
            </Contents>
            <ButtonContainer>
                <Button label="Close" />
            </ButtonContainer>
        </Container>
    );
};
