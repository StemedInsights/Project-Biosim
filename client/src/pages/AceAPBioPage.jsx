import { Link } from 'react-router-dom';
import UnitBox from '../components/UnitBox';

const units = [
    {
        title: 'Unit 1: Chemistry of Life',
        description: 'Description of Unit Here',
        topics: [
            '1.1: Structure of Water and Hydrogen Bonding', 
            '1.2: Elements of Life', 
            '1.3: Introduction to Macromolecules', 
            '1.4: Carbohydrates', 
            '1.5: Lipids', 
            '1.6: Nucleic Acids',
            '1.7: Proteins'
        ]
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

export default function AceAPBioPage() {
    return (
        <div className="min-h-screen w-screen bg-white text-[#0F3C2F] font-sans px-6 py-12">
            <div className="max-w-7xl mx-auto ">
                <Link to="/" className="mb-8 inline-flex items-center text-gray-700 hover:text-black">
                    ← Back to Home
                </Link>
                <h1 className="text-5xl font-extrabold text-[#0F3C2F] mb-4">
                    Ace <span className="text-[#FF826A]">AP Biology</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Explore our comprehensive resources designed to help you master the AP Biology curriculum.
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit, index) => (
                        <UnitBox key={index} {...unit} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
