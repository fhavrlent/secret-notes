import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppWrapper } from './components/AppWrapper';

const NoteCreator = lazy(() => import('./pages/NoteCreator/NoteCreator'));

export const Router = () => (
  <Routes>
    <Route path='/' element={<AppWrapper />}>
      <Route index element={<NoteCreator />} />
    </Route>
  </Routes>
);
