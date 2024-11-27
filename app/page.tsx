"use client";

import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100; // Final number
    const duration = 1500; // Duration of the animation in milliseconds
    const increment = Math.ceil(end / (duration / 50)); // Adjust speed of counting
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end; // Stop at the final number
        clearInterval(timer);
      }
      setCount(start);
    }, 50); // 50ms interval for smooth animation
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full text-black py-4 px-8 z-50">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/logo.png" // Path to the logo in the public folder
              alt="IdeoMix Logo"
              className="h-[100px] w-auto mr-4" // Adjust size and spacing
            />
          </div>

          {/* Navigation Bar */}
          <nav className="flex space-x-16 items-center bg-white bg-opacity-55 shadow-md rounded pl-6 pr-12 pt-3 pb-3 mx-auto">
            <a href="#home" className="hover:font-bold">Home</a>
            <a href="#services" className="hover:font-bold">Services</a>
            <a href="#about" className="hover:font-bold">About</a>
            <a href="#contact" className="hover:font-bold">Contact</a>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen"
      >
        <div className="grid grid-cols-2 gap-12 w-10/12 text-black bg-white bg-opacity-45 shadow-md rounded">
          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-5xl text-center font-bold">Welcome to IDEOMIX!</div>
            <div className="text-xl text-center mt-2">
              Where ideas meet opportunities. IdeoMix is your hub for entrepreneurs and investors to
              connect, collaborate, and innovate. Let’s turn visions into ventures together!
            </div>
            <div className="flex flex-col items-center justify-center p-4 mt-10">
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
                  Get Started!
                </button>
                <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start mt-50 p-4 ">
            <div className="text-5xl text-right font-bold mb-2 text-red-500">+{count}</div>
            <div className="text-3xl text-right font-bold text-grey"> entrepreneurs & investors</div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16">
        <div className="text-center h-screen mt-40">
          <h2 className="text-4xl font-bold mb-8 text-black">Our Services</h2>
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto ">
            <div className="p-4 bg-white bg-opacity-75 shadow-md rounded text-black">
              <h3 className="text-xl font-semibold mb-5">24/7 Support and Guidance</h3>
              <p>We provide round-the-clock support for entrepreneurs and investors. 
                Whether you need assistance navigating the platform, expert advice on
                 your business strategy, or immediate help with technical issues, our 
                 team is here to ensure your journey remains seamless.</p>
            </div>
            <div className="p-4 bg-white bg-opacity-75 shadow-md rounded text-black">
              <h3 className="text-xl font-semibold mb-5">Tailored Investment Matching</h3>
              <p>Our smart algorithm connects entrepreneurs with investors based on 
                shared interests, industry focus, and funding requirements. This 
                ensures both parties find the perfect match to build strong, successful collaborations.</p>
            </div>
            <div className="p-4 bg-white bg-opacity-75 shadow-md rounded text-black">
              <h3 className="text-xl font-semibold mb-5">Exclusive Access to Networking Events</h3>
              <p>Gain access to exclusive events like pitch competitions, webinars, and
                 networking meetups. Connect with industry leaders, potential partners,
                  and mentors to expand your opportunities and knowledge base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 ">
        <div className="max-w-4xl mx-auto text-center bg-white bg-opacity-55 shadow-md rounded text-black h-screen mt-10 pl-10 pr-10">
          <h2 className="text-4xl font-bold mb-5 pt-10">About Us</h2>
          <p>
          Founded in 2015, IdeoMix was born out of a vision to bridge the gap between entrepreneurs
           with groundbreaking ideas and investors eager to support innovative ventures. Over the years,
            we have evolved into a trusted platform that empowers individuals to transform ideas into successful businesses.
          </p>
          <hr className="border-gray-300 my-4" />
          <h2 className="text-4xl font-bold mb-5 mt-8 ">Our Vision</h2>
          <p>
          To be the world’s leading platform for empowering entrepreneurs
           and investors, where groundbreaking ideas are transformed into
            impactful ventures. We envision a future where innovation knows
             no boundaries and collaboration drives sustainable progress
              for communities worldwide.
          </p>
          <hr className="border-gray-300 my-4" />
          <h2 className="text-4xl font-bold mb-5 mt-8 ">Our Mission</h2>
          <p>
          To foster innovation, collaboration, and growth by providing a 
          dynamic space where entrepreneurs and investors can connect, 
          share knowledge, and create opportunities. We are committed to 
          building a community that thrives on shared success.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 ">
        <div className="max-w-4xl mx-auto h-screen mt-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-grey">Contact Us</h2>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border rounded focus:outline-none text-black-300 "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border rounded focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-4 border rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="p-4 ml-20 mt-10 mr-10 bg-red-500 text-white font-bold rounded hover:bg-red-700">
              Submit
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-gray-400 py-4 text-center mt-16">
        <p className="text-sm">
          All rights reserved® | Powered by React | Designer KasunJayamaha©
        </p>
      </footer>
    </div>
  );
}

export default Home;
