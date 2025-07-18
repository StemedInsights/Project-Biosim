import { Link } from 'react-router-dom';
import UnitBox from '../components/UnitBox';
import { apBioUnits } from '../../utils/pageUtils';

const units = apBioUnits;

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
