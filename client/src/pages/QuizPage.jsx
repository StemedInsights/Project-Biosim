import { useState } from 'react';
import { Link } from 'react-router-dom';
import UnitBox from '../components/UnitBox';

const subjects = {
    apbio: {
        name: 'AP Biology',
        units: ['Chemistry of Life', 'Cell Structure', 'Cellular Energetics']
    },
    opens: {
        name: 'IBO Opens',
        units: ['Molecular Bio Basics', 'Physiology']
    },
    semis: {
        name: 'IBO Semis',
        units: ['Advanced Biochemistry']
    }
};

const sampleQuestions = [
    {
        question: 'What is the primary function of enzymes?',
        options: ['Provide energy', 'Break down ATP', 'Catalyze reactions', 'Store genetic material'],
        answer: 'Catalyze reactions',
        explanation: 'Enzymes lower the activation energy of biochemical reactions.'
    },
];

export default function QuizPage() {
    const [subject, setSubject] = useState(null);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleUnit = (unit) => {
        setSelectedUnits((prev) =>
            prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
        );
    };

    const handleAnswer = (option) => {
        setSelectedOption(option);
        setShowExplanation(true);
    };

    if (!subject) {
        return (
            <div className="p-6 max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Choose Subject</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(subjects).map(([key, val]) => (
                        <button
                            key={key}
                            className="p-4 rounded bg-[#F8F8F8] hover:bg-[#E0E0E0] text-center"
                            onClick={() => setSubject(key)}
                        >
                            {val.name}
                        </button>
                    ))}
                </div>
                <Link to="/" className="block mt-4 text-blue-500 underline text-center">
                    &#x2190; Back to Homepage
                </Link>
            </div>
        );
    }

    if (selectedUnits.length === 0 && subject) {
        return (
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 text-center">
                        Select Units for Quiz
                    </h1>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {subjects[subject].units.map((unit, index) => (
                            <UnitBox
                                key={index}
                                title={unit}
                                selected={selectedUnits.includes(unit)}
                                onToggle={() => toggleUnit(unit)}
                            />
                        ))}
                    </div>
                    <Link to="/" className="mt-6 block text-center text-[#FF826A] hover:underline">
                        &#x2190; Back to Homepage
                    </Link>
                </div>
            </div>
        );
    }
    
    const currentQuestion = sampleQuestions[currentQIndex];
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Quiz: {subjects[subject].name}</h1>
                <p className="mt-2 text-lg text-gray-700 text-center">Question {currentQIndex + 1} / {sampleQuestions.length}</p>
                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {currentQuestion.question}
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                {currentQuestion.options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`block w-full text-left p-2 mt-2 rounded border ${selectedOption === option ? 'bg-[#FF826A] text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => handleAnswer(option)}
                        disabled={showExplanation}
                    >
                        {option}
                                    </button>
                                ))}
                            </div>
                            {showExplanation && (
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Explanation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{currentQuestion.explanation}</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button onClick={() => setCurrentQIndex((prev) => (prev > 0 ? prev - 1 : sampleQuestions.length - 1))} className="px-4 py-2 bg-[#FF826A] text-white rounded hover:bg-[#E0E0E0] hover:text-black">Previous</button>
                    <button onClick={() => setCurrentQIndex((prev) => (prev + 1) % sampleQuestions.length)} className="px-4 py-2 bg-[#FF826A] text-white rounded hover:bg-[#E0E0E0] hover:text-black">Next</button>
                </div>
                <Link to="/" className="mt-6 block text-center text-[#0F3C2F] hover:underline">
                    &#x2190; Back to Homepage                </Link>
            </div>
        </div>
    );
}