import { useState } from 'react';
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
    const navigate = useNavigate();

    const onAdd = () => {
        setToDo('');
        navigate('/');
    };

    return (
        <Container>
            <Input value={toDo} placeholder={'Write Your Todo Item...'} onChange={setToDo} />
            <Button label="Add" color="#304ffe" onClick={onAdd} />
        </Container>
    );
};
