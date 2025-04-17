import { Link } from 'react-router-dom';
import { useState } from 'react';
import IBOUnitBox from '../components/IBOUnitBox';

const units = [
    {
        title: 'Unit 1: Chemistry of Life',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 2: Cell Structure and Function',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 3: Cellular Energetics',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 4: Cell Communication and Cell Cycle',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 5: Heredity',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 6: Gene Expression and Regulation',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 7: Natural Selection',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    },
    {
        title: 'Unit 8: Ecology',
        description: 'Description of Unit Here',
        topics: ['1.1: Lorem Ipsum', '1.2: Lorem Ipsum', '1.3: Lorem Ipsum', '1.4: Lorem Ipsum', '1.5: Lorem Ipsum', '1.6: Lorem Ipsum', '1.7: Lorem Ipsum', '1.8 Lorem Ipsum']
    }
];
const semisUnits = units.slice(0, 4);
const opensUnits = units.slice(4, 8);

export default function AceAPBioPage() {
    const [isSemis, setIsSemis] = useState(true);
    const displayedUnits = isSemis ? semisUnits : opensUnits;

    const toggleMode = () => {
        setIsSemis(!isSemis);
    };

    return (
        <div className="min-h-screen w-screen bg-white text-[#0F3C2F] font-sans px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <Link to="/" className="inline-flex items-center text-gray-700 hover:text-black">
                        ← Back to Home
                    </Link>
                    <div className="flex items-center">
                        <span className="mr-2">Semis</span>
                        <label htmlFor="mode-toggle" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="mode-toggle" className="sr-only" checked={!isSemis} onChange={toggleMode} />
                                <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isSemis ? '' : 'translate-x-6'}`}></div>
                            </div>
                        </label>
                        <span className="ml-2">Opens</span>
                    </div>
                </div>
                <h1 className="text-5xl font-extrabold text-[#0F3C2F] mb-4">Ace <span className="text-[#FF826A]">IBO</span></h1>
                <p className="text-lg text-gray-700 mb-8">Explore our comprehensive resources designed to help you master the IBO.</p>
                {displayedUnits.length > 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedUnits.map((unit, index) => (
                            <IBOUnitBox key={index} {...unit} index={index + (isSemis ? 0 : 4)} />
                        ))}
                    </div>
                ) : (
                    <p>No units available for the selected mode.</p>
                )}
            </div>
        </div>
    );
}
