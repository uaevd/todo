import { createContext, useState } from 'react';

interface Context {
    readonly toDoList: Array<string>;
    readonly onAdd: (toDo: string) => void;
    readonly onDelete: (toDo: string) => void;
}

export const ToDoListContext = createContext<Context>({
    toDoList: [],
    /* eslint-disable @typescript-eslint/no-empty-function */
    onAdd: (): void => {},
    onDelete: (): void => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

export const ToDoListContextProvider = ({ children }: Props) => {
    const [toDoList, setToDoList] = useState(['Study React.js', 'Exercise', 'Read Books']);

    const onAdd = (toDo: string) => {
        if (!toDoList.includes(toDo)) setToDoList([...toDoList, toDo]);
    };
    const onDelete = (toDo: string) => setToDoList(toDoList.filter((item) => item !== toDo));

    return (
        <ToDoListContext.Provider
            value={{
                toDoList,
                onAdd,
                onDelete,
            }}
        >
            {children}
        </ToDoListContext.Provider>
    );
};
