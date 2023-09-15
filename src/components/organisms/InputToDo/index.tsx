import { useState, useContext } from 'react';
import { ToDoListContext } from 'contexts/ToDoList';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputToDo = () => {
    const [toDo, setToDo] = useState('');
    const { onAdd } = useContext(ToDoListContext);
    const navigate = useNavigate();

    const onAddToDo = () => {
        if (toDo !== '') {
            onAdd(toDo);
            setToDo('');
            navigate('/');
        }
    };

    return (
        <Container>
            <Input value={toDo} placeholder={'Write Your Todo Item...'} onChange={setToDo} />
            <Button label="Add" color="#304ffe" onClick={onAddToDo} />
        </Container>
    );
};
