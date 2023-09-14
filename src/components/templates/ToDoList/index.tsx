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

interface Props {
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: (toDo: string) => void;
}

export const ToDoList = ({ toDoList, onDelete }: Props) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <PageTitle title="To-Do List" />
                <ToDoListContainer>
                    {toDoList.map((toDo) => (
                        <ToDoItem
                            key={toDo}
                            label={toDo}
                            onDelete={() => {
                                if (typeof onDelete === 'function') onDelete(toDo);
                            }}
                        />
                    ))}
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
