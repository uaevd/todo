import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { PageTitle } from 'components/atoms/PageTitle';
import { ToDoItem } from 'components/organisms/ToDoItem';
import { Button } from 'components/atoms/Button';

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

const ToDoListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    position: absolute;
    inset: auto 40px 40px auto;
    z-index: 1;
`;

export const ToDoList = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <PageTitle title="To-Do List" />
                <ToDoListContainer>
                    <ToDoItem label="Study React.js" />
                    <ToDoItem label="Study CDD" />
                </ToDoListContainer>
                <ButtonContainer>
                    <Button
                        label="Add To-Do Item"
                        color="#304ffe"
                        onClick={() => navigate('/add')}
                    />
                </ButtonContainer>
            </Contents>
        </Container>
    );
};
