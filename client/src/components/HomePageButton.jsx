import { Link } from 'react-router-dom';

export default function HomePageButton({ title, description, buttonLabel, to, bgColor = 'bg-red-500' }) {
    return (
        <div className="rounded-2xl p-8 shadow-md flex flex-col justify-between w-full h-full bg-white">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-[#0F3C2F]">{title}</h2>
                <p className="text-md mb-6 text-[#0F3C2F]">{description}</p>
            </div>
            <Link
                to={to}
                className="mt-auto bg-white border-2 border-[#0F3C2F] text-[#0F3C2F] font-semibold rounded-full px-6 py-3 w-full text-center hover:bg-gray-100 hover:text-black"
            >
                {buttonLabel}
            </Link>
        </div>
    );
}