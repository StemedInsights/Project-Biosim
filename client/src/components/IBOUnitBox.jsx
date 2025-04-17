import { Link } from 'react-router-dom';
import { useState } from 'react';

function IBOUnitBox({ title, description, index, topics }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/ibo-unit/${index}`}
      className="rounded-2xl border-2 border-[#1C388F] bg-[#1C388F] hover:bg-[#315BC6] text-white p-6 flex flex-col justify-between h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-sm text-white">{description}</p>
      </div>
      {isHovered && topics && (
        <div className="mt-4">
          {topics.map((topic, topicIndex) => (
            <p key={topicIndex} className="text-sm text-white mb-1 ">
              {topic}
            </p>
          ))}
        </div>
      )}      
      <p className="text-sm text-white mt-4 ">Click to Learn More</p>
    </Link>
  );
}

export default IBOUnitBox;