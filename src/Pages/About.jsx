
import { User, Award } from 'lucide-react';
import photo1 from "../assets/Nutish.jpg"
import photo2 from "../assets/amar.jpg"
import photo3 from "../assets/ishika.jpg"
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Nitish Tyagi",
      course: "Computer Science",
      branch: "CSE",
      project: "Effects of Yoga on Health",
      image: photo1
    },
    {
      name: "Amar Singh",
      course: "Computer Science",
      branch: "CSE",
      project: "Effects of Yoga on Health",
      image: photo2
    },
    {
      name: "Ishika Tyagi",
      course: "Computer Science",
      branch: "CSE",
      project: "Effects of Yoga on Health",
      image: photo3
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 min-h-screen py-16 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 rounded-full filter blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Stylish Headline */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <Award className="w-12 h-12 text-blue-600 mr-4" strokeWidth={1.5} />
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
              Meet Our Innovators
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the brilliant minds behind our groundbreaking project
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative pt-12 pb-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-24 h-24 text-gray-500" />
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-24 pb-8 px-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {member.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold text-blue-600">Course:</span> {member.course}
                  </p>
                  <p>
                    <span className="font-semibold text-purple-600">Branch:</span> {member.branch}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">Project:</span> {member.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;