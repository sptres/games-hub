import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGamepad } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const games = [
    {
      name: 'Wordle',
      description: 'A word guessing game.',
      url: 'https://graceful-trifle-92975c.netlify.app/',
      image:
        'https://cdn.apartmenttherapy.info/image/upload/v1697122988/at/art/design/2023-10/ApartmentTherapy_Wordle_Final.jpg',
    },
    {
      name: 'Omok',
      description: 'A traditional board game.',
      url: 'https://cosmic-arithmetic-814131.netlify.app/',
      image:
        'https://playgame-img.kakaogames.com/production/images/outd-2019-01-23/00-28-14-665/facebookShareImage.jpeg',
    },
    {
      name: 'Flappy Bird',
      description: 'A classic arcade game.',
      url: 'https://boisterous-alpaca-cd6243.netlify.app/',
      image:
        'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imageg79l-1682602936960.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75',
    },
  ];

  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center">
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url(https://example.com/hero-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
            Welcome to Games Hub
          </h1>
          <p className="text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Play and Enjoy the Best Online Games
          </p>
          <a
            href="#games"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaGamepad className="mr-2" /> Explore Games
          </a>
        </div>
      </header>
      <section id="games" className="py-8">
        <h2
          className="text-4xl font-bold text-center mb-8 text-white"
          data-aos="fade-up"
        >
          Our Games
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <a
              key={index}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{game.name}</h3>
                <p className="text-gray-300">{game.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
