import './App.css';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl font-thin mb-4">CAPTURE MOMENTS</h1>
          <p className="text-xl font-light tracking-wide">
            Professional Photography Services
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden group transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={`https://source.unsplash.com/random/600x400?photography=${item}`}
                  alt={`Portfolio ${item}`}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">About Me</h2>
          <p className="text-lg font-light leading-relaxed mb-12">
            With over years of experience capturing life's most precious
            moments, I bring creativity and professionalism to every shoot. My
            passion lies in telling stories through the lens, creating timeless
            memories that will last generations.
          </p>
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Photography',
                description:
                  'Capturing your special moments with elegance and style.',
              },
              {
                title: 'Portrait Sessions',
                description:
                  'Professional portraits that tell your unique story.',
              },
              {
                title: 'Event Coverage',
                description:
                  'Comprehensive coverage for all your special events.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            Let's create something beautiful together
          </p>
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 outline-none transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 outline-none transition-colors duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 outline-none transition-colors duration-300"
            ></textarea>
            <button className="w-full py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Photography Studio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
