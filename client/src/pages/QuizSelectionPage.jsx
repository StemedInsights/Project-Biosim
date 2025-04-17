import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function QuizSelectionPage() {
    const location = useLocation();
    const { title, units } = location.state || {};
    const navigate = useNavigate();
    const [selectedUnits, setSelectedUnits] = useState([]);

    const handleUnitChange = (event) => {
        const unit = event.target.value;
        if (event.target.checked) {
            setSelectedUnits([...selectedUnits, unit]);
        } else {
            setSelectedUnits(selectedUnits.filter((u) => u !== unit));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz-game', { state: { units: selectedUnits } });
    };

    return (
        <div className="flex flex-col items-center p-8 bg-white w-screen min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                <span className="text-gray-800 mr-2">{title}</span>
                <span className="text-[#FF826A]">Quiz</span>
            </h1>
            {units && units.length > 0 ? (<form onSubmit={handleSubmit} className="w-full max-w-md">
                {units.map(unit => (
                    <div key={unit} className="bg-white rounded-lg p-4 mb-4 shadow-sm flex items-center">
                        <input 
                            type="checkbox" 
                            id={unit} 
                            value={unit} 
                            onChange={handleUnitChange} 
                            className="mr-2"
                        />
                        <label htmlFor={unit} className="text-gray-700">{unit}</label>
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF826A] hover:bg-[#FF9B8B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF826A]"
                >
                    Start Quiz
                </button>
            </form>) : <p>No units available for this quiz.</p>}
            <Link to="/quiz" className="mt-4 text-[#FF826A] hover:text-[#FF9B8B]">
                Back to Quiz Page
            </Link>
        </div>
    );
}

export default QuizSelectionPage;