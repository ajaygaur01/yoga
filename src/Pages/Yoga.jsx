import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Info } from 'lucide-react';
import Balasana from "../assets/balasana.jpg"
import Adho from "../assets/Adho.jpg"
import tadasana from "../assets/tadasana.jpg"
import Virbhadra from "../assets/Virbhadra.png"
import Vrksasana from "../assets/Vrksasana.jpeg"
import cobra from "../assets/cobra.jpg"
import Triangle from "../assets/triangle.jpg"
import Nav from "../assets/Nav.jpg"
import sir from "../assets/sir.jpg"
import sar from "../assets/sar.jpg"
import plank from "../assets/plank.webp"
const yogaAsanas = [
        {
          id: 1,
          name: "Tadasana",
          image: tadasana,
          benefits: 'Improves posture, balance, and body awareness. Strengthens thighs, knees, and ankles.',
          difficulty: 'Beginner'
        },
        {
          id: 2,
          name: "Vrksasana",
          image: Vrksasana,
          benefits: 'Enhances balance, strengthens leg muscles, and improves concentration.',
          difficulty: 'Intermediate'
        },
        {
          id: 3,
          name: "Virbhadra",
          image: Virbhadra,
          benefits: 'Strengthens legs, opens hips, and builds core stability.',
          difficulty: 'Intermediate'
        },
        {
          id: 4,
          name: "Adho Mukh Shavasana",
          image: Adho,
          benefits: 'Stretches entire body, strengthens arms and legs, reduces stress.',
          difficulty: 'Beginner'
        },
        {
          id: 5,
          name: "Balasana",
          image: Balasana,
          benefits: 'Relaxes the body, stretches back, hips, and thighs, calms the mind.',
          difficulty: 'Beginner'
        },
        {
          id: 6,
          name: "Bhujangasana",
          image: cobra,
          benefits: 'Strengthens spine, opens chest, improves posture, and stimulates abdominal organs.',
          difficulty: 'Beginner'
        },
        {
          id: 7,
          name: 'Triangle Pose (Trikonasana)',
          image: Triangle,
          benefits: 'Stretches legs, strengthens core, improves balance and concentration.',
          difficulty: 'Intermediate'
        },
        {
          id: 12,
          name: 'Plank Pose (Phalakasana)',
          image: plank,
          benefits: 'Strengthens core, arms, and wrists. Improves overall body strength.',
          difficulty: 'Intermediate'
        },
   
        {
          id: 18,
          name: 'Boat Pose (Navasana)',
          image: Nav,
          benefits: 'Strengthens core, improves balance, tones abdominal muscles.',
          difficulty: 'Advanced'
        },
        {
          id: 19,
          name: 'Headstand (Sirsasana)',
          image: sir,
          benefits: 'Improves focus, strengthens upper body, reverses blood flow.',
          difficulty: 'Advanced'
        },
        {
          id: 20,
          name: 'Shoulder Stand (Sarvangasana)',
          image: sar,
          benefits: 'Stimulates thyroid, improves circulation, calms the brain.',
          difficulty: 'Advanced'
        }
      ];


const YogaAsanaCard = ({ asana }) => {
  const [showDetails, setShowDetails] = useState(false);

  const difficultyColor = {
    'Beginner': 'bg-green-100',
    'Intermediate': 'bg-yellow-100',
    'Advanced': 'bg-red-100',
    'All Levels': 'bg-blue-100'
  };

  return (
    <div className="relative group">
      <div 
        className={`
          w-64 h-96 rounded-lg shadow-lg overflow-hidden 
          transform transition-transform duration-300 
          hover:scale-105 cursor-pointer 
          ${difficultyColor[asana.difficulty]}
        `}
        onClick={() => setShowDetails(!showDetails)}
      >
        <img 
          src={asana.image} 
          alt={asana.name} 
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{asana.name}</h3>
          <div className="absolute top-4 right-4">
            <Info 
              className={`
                w-6 h-6 text-gray-700 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
              `}
            />
          </div>
          {showDetails && (
            <div className="absolute inset-0 bg-white bg-opacity-90 p-4 overflow-y-auto">
              <h3 className="text-xl font-bold mb-2">{asana.name}</h3>
              <p className="text-sm">{asana.benefits}</p>
              <span className={`
                absolute bottom-2 right-2 px-2 py-1 rounded 
                text-xs font-semibold 
                ${difficultyColor[asana.difficulty]}
              `}>
                {asana.difficulty}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for type checking
YogaAsanaCard.propTypes = {
  asana: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['Beginner', 'Intermediate', 'Advanced', 'All Levels']).isRequired
  }).isRequired
};

const YogaAsanasApp = () => {
  const [filter, setFilter] = useState('All');

  const filteredAsanas = filter === 'All' 
    ? yogaAsanas 
    : yogaAsanas.filter(asana => asana.difficulty === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Yoga Asanas Catalog
        </h1>
        
        <div className="flex justify-center mb-8">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`
                mx-2 px-4 py-2 rounded 
                ${filter === level 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'}
                hover:bg-blue-600 transition duration-300
              `}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredAsanas.map(asana => (
            <YogaAsanaCard key={asana.id} asana={asana} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaAsanasApp;