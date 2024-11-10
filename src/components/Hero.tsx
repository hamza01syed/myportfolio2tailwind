// components/Hero.tsx
import img1 from "@/public/images/syedpic.jpg"
import Image from "next/image";

const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I am Syed Humza</h1>
            <p className="text-xl text-gray-600 mb-6">I am a Web Developer specializing in creating beautiful and functional web applications.</p>
            <a href="#projects" className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition">
              See My Work
            </a>
          </div>
  
          {/* Image Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              src={img1}
              alt="Your Name"
              className="w-64 h-64 rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  