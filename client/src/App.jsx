// Root structure with routing and components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AceAPBioPage from './pages/AceAPBioPage';
import AceIBOPage from './pages/AceIBOPage';
import QuizPage from './pages/QuizPage';
import UnitPage from './pages/UnitPage';
import IBOUnitPage from './pages/IBOUnitPage';
import QuizSelectionPage from './pages/QuizSelectionPage';
import QuizGamePage from './pages/QuizGamePage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ace-apbio" element={<AceAPBioPage />} />
                <Route path="/ace-ibo" element={<AceIBOPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quiz-game" element={<QuizGamePage/>}/>
                <Route path="/quiz-selection" element={<QuizSelectionPage />} />
                <Route path="/unit/:unitId" element={<UnitPage />} />
                <Route path="/ibo-unit/:unitId" element={<IBOUnitPage />} />
            </Routes>
        </BrowserRouter>
    );
}