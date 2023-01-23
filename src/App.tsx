// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PostInfoPage } from './modules/PostInfoPage';

export const App: React.FC = () => (
  <div className="page">
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path=":id" element={<PostInfoPage />} />
      </Routes>
    </main>
  </div>
);
