import { PageTitle } from 'components/atoms/PageTitle';
import { Button } from 'components/atoms/Button';
import { InputToDo } from 'components/organisms/InputToDo';

export const ToDoInput = () => {
    return (
        <div>
            <div>
                <PageTitle title="Add To-Do Item" />
                <InputToDo />
            </div>
            <div>
                <Button label="Close" />
            </div>
        </div>
    );
};
