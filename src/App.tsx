import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToDoListContextProvider } from 'contexts/ToDoList';
import { Header } from 'components/organisms/Header';
import { ToDoInputPage } from 'components/pages/ToDoInputPage';
import { ToDoListPage } from 'components/pages/ToDoListPage';
import { NotFoundPage } from 'components/pages/NotFoundPage';

export default function App() {
    return (
        <ToDoListContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ToDoListPage />} />
                    <Route path="/add" element={<ToDoInputPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </ToDoListContextProvider>
    );
}
