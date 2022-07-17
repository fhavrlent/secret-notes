import { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AppWrapper } from './components/AppWrapper';

const NoteCreator = lazy(() => import('./pages/NoteCreator'));
const ReadMessageNotice = lazy(() => import('./pages/ReadMessageNotice'));

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppWrapper />}>
        <Route index element={<NoteCreator />} />
        <Route path='/:messageId' element={<ReadMessageNotice />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
