import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apBioContent } from '../../utils/contentUtils';
import parse from 'html-react-parser'

//let units = await apBioContent();

export default function UnitPage() {
    const { unitId } = useParams();
    const [units, setUnits] = useState([]);
    const unitIndex = parseInt(unitId || '0');
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    // Reset active topic when unit changes
    useEffect(() => {
        setActiveTopicIndex(0);
        apBioContent().then(setUnits);
    }, [unitIndex]);
    console.log("Units:", units);

    if (!units.length) {
        return <div>Loading...</div>;
    } else {    
        const unit = units[unitIndex] || units[0];
        const activeTopic = unit.topics[activeTopicIndex];
        
        return (
            <div className="min-h-screen w-full bg-[#C4DCD5] text-[#0F3C2F] font-sans">
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
                            {parse(activeTopic.content)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
