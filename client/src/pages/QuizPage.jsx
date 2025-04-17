import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UnitBox from '../components/UnitBox';

const subjects = {
    //TODO: Add description of sections
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
        units: ['Advanced Biochemistry', "Genetics", "Evolution"]
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
    const navigate = useNavigate();

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
            <div className="w-screen min-h-screen bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Select Your Quiz
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            Choose a subject to start your quiz.
                        </p>
                    </div>

                    {/* Subject Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(subjects).map(([key, subject]) => (                                
                            <div key={key} className="col-span-1 bg-gray-50 rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900">{subject.name}</h3>
                                    <p className="mt-2 text-gray-600">
                                        {/* TODO: Add subject descriptions */}
                                    </p>
                                    {key === 'apbio' && (
                                         <Link
                                            to="/quiz-selection"
                                            className="block mt-4 bg-white border-2 border-[#0F3C2F] text-[#0F3C2F] font-semibold rounded-full px-6 py-3 w-full text-center hover:bg-gray-100 hover:text-black"
                                            state={{
                                                title: subjects.apbio.name,
                                                units: subjects.apbio.units
                                            }}                                            >
                                            Quiz
                                        </Link>
                                    )}
                                    {key === 'opens' && (
                                            <Link
                                                to="/quiz-selection"
                                                className="block mt-4 bg-white border-2 border-[#0F3C2F] text-[#0F3C2F] font-semibold rounded-full px-6 py-3 w-full text-center hover:bg-gray-100 hover:text-black"
                                                state={{
                                                    title: subjects.opens.name,
                                                    units: subjects.opens.units
                                                }}
                                            >
                                                Quiz
                                            </Link>
                                    )}
                                    {key === 'semis' && (
                                        <div className="mt-4 rounded-lg shadow bg-white">
                                            <Link 
                                                to="/quiz-selection"
                                                className="block mt-4 bg-white border-2 border-[#0F3C2F] text-[#0F3C2F] font-semibold rounded-full px-6 py-3 w-full text-center hover:bg-gray-100 hover:text-black"
                                                state={{ 
                                                        title: subjects.semis.name,
                                                        units: subjects.semis.units
                                                    }
                                                }>
                                                 Quiz
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>))}
                    </div>

                    {/* Back to Homepage */}
                    <div className="mt-12 text-center">
                        <Link to="/" className="text-[#FF826A] hover:underline">
                            &#x2190; Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}