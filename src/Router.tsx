import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppWrapper } from './components/AppWrapper';

const NoteCreator = lazy(() => import('./pages/NoteCreator'));
const ReadMessageNotice = lazy(() => import('./pages/ReadMessageNotice'));

export const Router = () => (
  <Routes>
    <Route path='/' element={<AppWrapper />}>
      <Route index element={<NoteCreator />} />
      <Route path='/:messageId' element={<ReadMessageNotice />} />
    </Route>
  </Routes>
);
