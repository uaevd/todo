import { ToDoList } from 'components/templates/ToDoList';

export const ToDoListPage = () => {
    const toDoList = ['Study React.js', 'Study CDD', 'Create To-Do List App'];

    return <ToDoList toDoList={toDoList} />;
};
