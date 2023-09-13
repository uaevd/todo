import styled from '@emotion/styled';

const TextInput = styled.input`
    font-size: 1.2rem;
    padding: 8px;
`;

interface Props {
    readonly value: string;
    readonly placeholder: string;
    readonly onChange: (text: string) => void;
}

export const Input = ({ value, placeholder, onChange }: Props) => (
    <TextInput value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
);
