import { JSX } from 'react';
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Homepage from './components/home-page';
import { InfoButton } from './components/Scan-Button.tsx';
import { InfoForm } from './components/InfoForm.tsx';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/scan" element={<InfoButton />} />
        <Route path="/scan/scaninfo" element={<InfoForm />} />
      </Routes>
    </Router>
  );
}