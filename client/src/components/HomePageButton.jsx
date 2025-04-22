// --- components/HomePageButton.jsx ---
import { Link } from 'react-router-dom';

export default function HomePageButton({
  title,
  description,
  buttonLabel,
  to,
  bgColor = 'bg-white',
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between w-full h-full ${bgColor}`}
    >
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#0F3C2F]">
          {title}
        </h2>
        <p className="text-md text-[#2D594B] mb-6">{description}</p>
      </div>
      <Link
        to={to}
        className="mt-auto inline-block text-center bg-[#0F3C2F] text-white font-medium rounded-full px-5 py-2 hover:bg-[#144c3b] transition-colors duration-200"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
