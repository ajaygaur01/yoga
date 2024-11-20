
import { Home, Info,  Heart, Zap, Brain, Album  } from 'lucide-react';
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md text-blue-900 p-4 flex justify-between items-center fixed w-full z-50">
        <div className="text-2xl font-bold flex items-center">
          <Heart className="mr-2 text-blue-600" /> Yoga Wellness
        </div>
        <div className="flex space-x-6">
          <Link   to="/" className="flex items-center hover:text-blue-600 transition">
            <Home className="mr-2" /> Home
          </Link>
          <Link to="/about" className="flex items-center hover:text-blue-600 transition">
            <Info className="mr-2" /> About
          </Link>
          <Link to="/yoga" className="flex items-center hover:text-blue-600 transition">
            <Album className="mr-2" /> Yoga
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <section id="home" className="text-center mb-12">
          <div className="relative mb-12">
            <img 
              src="https://mapmygenome.in/cdn/shop/articles/The_Benefits_of_Yoga_for_Mind_and_Body_-_Enhancing_Health_and_Wellness.webp?v=1718860676" 
              alt="Yoga Practice" 
              className="w-full h-[500px]  rounded-2xl shadow-2xl object-fill"
            />
            <div className="absolute inset-0 bg-blue-900/50 rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
                Transform Your Health with Yoga
              </h1>
              <p className="text-xl max-w-2xl mb-8 drop-shadow-md">
                Discover holistic well-being through the ancient practice of yoga
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <Zap className="mx-auto text-blue-600 mb-4" size={48} />
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Physical Vitality
              </h2>
              <p className="text-gray-700">Enhances strength, flexibility, and energy levels</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <Brain className="mx-auto text-blue-600 mb-4" size={48} />
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Mental Clarity
              </h2>
              <p className="text-gray-700">Reduces stress and improves cognitive function</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <Heart className="mx-auto text-blue-600 mb-4" size={48} />
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Holistic Wellness
              </h2>
              <p className="text-gray-700">Balances mind, body, and spiritual health</p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg mb-12">
          <div className="flex items-center">
            <img 
              src="https://en-media.thebetterindia.com/uploads/2015/06/yoga1.jpg" 
              alt="Yoga Practice" 
              className="w-1/2 rounded-2xl mr-8 shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">About Yoga Healing Power</h2>
              <p className="text-gray-700 leading-relaxed">
                Yoga transcends physical exercise, offering a comprehensive approach to wellness. By integrating breath, movement, and mindfulness, it provides profound benefits for physical health, mental resilience, and emotional balance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div id="contact" className="text-center">
            <h3 className="text-xl mb-4 font-semibold">Contact Us</h3>
            <p>Email: wellness@yogahealth.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl mb-4 font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-blue-300">Home</a>
              <a href="#about" className="block hover:text-blue-300">About</a>
              <a href="#contact" className="block hover:text-blue-300">Contact</a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl mb-4 font-semibold">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="inline-block hover:text-blue-300">Instagram</a>
              <a href="#" className="inline-block hover:text-blue-300">Facebook</a>
              <a href="#" className="inline-block hover:text-blue-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          © 2024 Yoga Wellness. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;