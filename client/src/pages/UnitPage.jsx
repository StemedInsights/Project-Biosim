import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const units = [
    {
        title: 'Unit 1: Chemistry of Life',
        topics: [
            { name: 'Elements of Life', content: 'Content about elements essential to life.' },
            { name: 'Properties of Water', content: 'Details on cohesion, adhesion, and polarity.' },
            { name: 'Macromolecules', content: 'Information on carbs, lipids, proteins, and nucleic acids.' },
            { name: 'Nucleic Acids', content: 'How DNA and RNA store genetic information.' }
        ]
    },
    {
        title: 'Unit 2: Cell Structure and Function',
        topics: [
            { name: 'Cell Organelles', content: 'Functions of organelles like mitochondria and ER.' },
            { name: 'Membrane Transport', content: 'Osmosis, diffusion, and active transport.' },
            { name: 'Surface Area to Volume', content: 'Why cell size matters.' }
        ]
    },
    // Additional units...
];

export default function UnitPage() {
    const { unitId } = useParams();
    const unitIndex = parseInt(unitId || '0');
    const unit = units[unitIndex] || units[0];

    const [activeTopicIndex, setActiveTopicIndex] = useState(0);
    const activeTopic = unit.topics[activeTopicIndex];

    return (
        <div className="h-screen w-screen bg-[#C4DCD5] text-[#0F3C2F] font-sans">
            <div className="container mx-auto p-8 ">
                <Link to="/ace-apbio" className="mb-8 inline-flex items-center text-gray-700 hover:text-black">
                    ← Back to AP Bio Overview
                </Link>
                <h1 className="text-4xl font-bold mb-4">{unit.title}</h1>
                <p className="text-lg text-gray-700 mb-8">Dive deep into the topics of {unit.title}. Select a topic from the sidebar to get started.</p>

                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden ">
                    <div className="w-full md:w-1/4 p-6 md:border-r md:border-gray-300 overflow-y-auto">
                        <h3 className="text-xl font-semibold mb-4">Topics</h3>
                        <ul className="space-y-2">
                            {unit.topics.map((topic, index) => (
                                <li key={index}>
                                    <button
                                        style={{ backgroundColor: 'transparent' }}
                                        className={`w-full text-left py-2 px-4 rounded-md transition-colors duration-200 hover:bg-gray-100 hover:text-black ${index === activeTopicIndex ? 'text-black font-bold' : 'text-gray-700'}`}
                                        onClick={() => setActiveTopicIndex(index)}
                                    >
                                        {topic.name}
                                    </button>
                                </li>                                
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto">
                        <h4 className="text-2xl font-bold mb-4">{activeTopic.name}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">{activeTopic.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
