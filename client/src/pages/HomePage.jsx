// --- pages/HomePage.jsx ---
import HomePageButton from '../components/HomePageButton';

const mockups = [
    {
        title: 'Ace Your AP Biology Exam',
        to: '/ace-apbio',
        description: 'Comprehensive resources to help you score a 5 on the AP Biology exam.',
        buttonLabel: 'Explore'
    },
    {
        title: 'Prepare for the IBO',
        to: '/ace-ibo',
        description: 'Study guides for the International Biology Olympiad opens and semi-final exams.',
        buttonLabel: 'Explore'
    },
    {
        title: 'Test Your Knowledge',
        to: '/quiz',
        description: 'Practice quizzes to help you prepare for your exams.',
        buttonLabel: 'Explore'
    }
];

const contributors = ['Joel Biswas', 'Pranav Moorthy', 'Lorem Ipsum', 'Lorem Ipsum'];

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-white px-6 py-12 font-sans">
      <div className="max-w-7xl w-full mx-auto">
        <header className="mb-12 text-left">
          <h1 className="text-6xl font-extrabold text-[#0F3C2F] mb-2">
            Our <span className="text-[#FF826A]">Initiatives</span>
          </h1>
        </header>

        <section className="mb-16 rounded-3xl">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockups.map((item, i) => (
              <div key={i} className="h-full">
                <HomePageButton {...item} />
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-12 mt-12 rounded-lg bg-[#F8F8F8]">
          <h2 className="text-4xl font-bold text-[#0F3C2F] mb-4">About Us</h2>
          <p className="text-lg text-[#0F3C2F] max-w-2xl mx-auto">
            BioQuest Academy is a student-led initiative dedicated to helping
            learners excel in AP Biology and the International Biology Olympiad.
            We believe in the power of accessible, high-quality resources to
            empower the next generation of scientists.
          </p>
        </section>

        <section className="text-center py-12 mt-12 rounded-lg bg-[#F8F8F8]">
          <h2 className="text-4xl font-bold text-[#0F3C2F] mb-4">Get Involved</h2>
          <p className="text-lg text-[#0F3C2F] max-w-2xl mx-auto">
            Join BioQuest Academy to empower education through innovation and
            collaboration. Be part of the change today!
          </p>
        </section>

        <section className="text-center py-12 mt-12 rounded-lg bg-[#F8F8F8]">
          <h2 className="text-4xl font-bold text-[#0F3C2F] mb-4">Contributors</h2>
          <ul className="text-lg text-[#0F3C2F] mx-auto max-w-2xl list-disc list-inside">
            {contributors.map((contributor, index) => (
              <li key={index}>{contributor}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
