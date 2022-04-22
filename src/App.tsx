import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.sass';
import LoginPage from './pages/login';

function App() {
    const history = useNavigate();

    return (
        <Routes>
            <Route path="/login" element={<LoginPage history={history} />} />
        </Routes>
    );
}

export default App;
