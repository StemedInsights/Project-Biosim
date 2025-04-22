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

const contributors = ['Joel Biswas', 'Pranav Moorthy', 'Aayush Jalgaonkar', 'Lorem Ipsum'];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full font-sans bg-white text-[#0F3C2F]">
      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-32 bg-gradient-to-b from-white to-[#E0FBF2]">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
  <span className="text-black">Ace Biology with </span>
  <span className="bg-gradient-to-r from-[#0F3C2F] to-[#FF826A] bg-clip-text text-transparent">
    BioQuest Academy
  </span>
</h1>


        <p className="text-xl max-w-xl mx-auto text-[#2D594B]">
          Your one-stop hub for AP Biology and IBO preparation. Practice, learn, and level up.
        </p>
        <div className="mt-8">
          <a href="#features" className="bg-[#0F3C2F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#144c3b] transition">
            Explore Subjects
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12"> <span className="text-[#0F3C2F]">Our </span> <span className="text-[#FF826A]">Initiatives</span> </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mockups.map((item, i) => (
            <div key={i} className="bg-[#F8F8F8] rounded-2xl p-6 shadow hover:shadow-lg transition">
              <HomePageButton {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="text-center px-6 py-20 bg-[#F8F8F8]">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#2D594B]">
          BioQuest Academy is a student-led initiative dedicated to helping learners excel in AP Biology and the International Biology Olympiad.
          We believe in the power of accessible, high-quality resources to empower the next generation of scientists.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg max-w-xl mx-auto mb-6 text-[#2D594B]">
          Join BioQuest Academy and unlock your potential with expertly curated content, practice tools, and a community of passionate learners.
        </p>
        <a href="/signup" className="bg-[#FF826A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff9e88] transition">
          Join Now
        </a>
      </section>

      {/* Contributors */}
      <section className="text-center px-6 py-20 bg-[#F8F8F8]">
        <h2 className="text-4xl font-bold mb-6">Contributors</h2>
        <ul className="text-lg max-w-xl mx-auto space-y-2">
          {contributors.map((name, idx) => (
            <li key={idx} className="text-[#2D594B]">{name}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3C2F] text-white py-10 text-center">
        <p className="mb-2">© {new Date().getFullYear()} BioQuest Academy</p>
        <p className="text-sm opacity-70">Built with 💚 by students, for students.</p>
      </footer>
    </div>
  );
}
