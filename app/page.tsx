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
<header className="fixed top-0 left-0 w-full text-white py-4 px-8 z-50">
  <div className="flex items-center justify-between">
    {/* Logo Section */}
    <div className="flex items-center">
      <img
        src="./logo.png" // Path to the logo in the public folder
        alt="IdeoMix Logo"
        className="h-[100px] w-auto mr-4" // Adjust size and spacing
      />
    </div>

    {/* Navigation Bar */}
    <nav className="flex items-center bg-black bg-opacity-45 shadow-md rounded pl-6 pr-12 pt-3 pb-3 w-full">
      {/* Left Navigation Links */}
      <div className="flex space-x-16">
        <a href="#home" className="hover:font-bold hover:text-yellow-300">Home</a>
        <a href="#services" className="hover:font-bold hover:text-yellow-300">Services</a>
        <a href="#entrepreneurs" className="hover:font-bold hover:text-yellow-300">Entrepreneurs</a>
        <a href="#investors" className="hover:font-bold hover:text-yellow-300">Investors</a>
        <a href="#about" className="hover:font-bold hover:text-yellow-300">About</a>
        <a href="#contact" className="hover:font-bold hover:text-yellow-300">Contact</a>
      </div>

      {/* Right Side Search Bar and Login */}
      <div className="flex ml-auto items-center space-x-4">
        {/* Search Bar */}
        <form className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-2 rounded-lg bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-white"
          />
          <button
            type="submit"
            className="absolute right-2 text-gray-500 hover:text-yellow-300"
          >
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </form>

        {/* Login Button */}
        <button className="px-6 py-1.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
          Login
        </button>
      </div>
    </nav>
  </div>
</header>


{/* Welcome Section */}
<section
  id="home"
  className="flex items-center justify-center h-screen relative"
>
  <div className="grid grid-cols-2 gap-12 w-10/12 text-white bg-black bg-opacity-45 shadow-md rounded">
    {/* Column 1 */}
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-5xl text-center font-bold">Welcome to IdeoMix!</div>
      <div className="text-2xl text-center mt-5 font-semibold">
        Creating Opportunities, Together...
      </div>
      <div className="text-xl text-center">
        Where ideas meet opportunities. IdeoMix is your hub for entrepreneurs
        and investors to connect, collaborate, and innovate. Let’s turn visions
        into ventures together!
      </div>
      <div className="flex flex-col items-center justify-center p-4 mt-10">
        <div className="flex space-x-4">
          <button className="px-6 py-3 text-l bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 hover:text-black">
            SignUp today..
          </button>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-start mt-50 p-4">
      <div className="text-5xl text-right font-bold mb-2 text-red-500">+{count}</div>
      <div className="text-3xl text-right font-bold text-grey"> entrepreneurs & investors</div>
    </div>
  </div>

  {/* Social Media Icons */}
  <div className="absolute bottom-10 right-10 flex space-x-6 bg-black px-3 py-3 rounded-lg bg-opacity-55">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-600 hover:text-blue-800"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M22.675 0h-21.35C.601 0 0 .601 0 1.326v21.348C0 23.4.601 24 1.326 24h11.495v-9.294H9.616v-3.622h3.205V8.413c0-3.17 1.933-4.896 4.758-4.896 1.353 0 2.515.1 2.854.144v3.311h-1.96c-1.538 0-1.835.731-1.835 1.803v2.365h3.672l-.479 3.622h-3.193V24h6.261C23.4 24 24 23.399 24 22.674V1.326C24 .601 23.399 0 22.675 0z"
        />
      </svg>
    </a>
    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-500 hover:text-green-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.52 3.477A11.764 11.764 0 0012.063 0C5.522 0 .244 5.276.244 11.814c0 2.082.544 4.135 1.581 5.938L0 24l6.507-1.677a11.745 11.745 0 005.553 1.39h.003c6.541 0 11.818-5.276 11.818-11.814 0-3.157-1.225-6.14-3.362-8.399zM12.06 21.3c-1.841 0-3.63-.493-5.185-1.428l-.371-.22-3.866 1.02 1.03-3.768-.243-.386a9.565 9.565 0 01-1.483-5.175c0-5.302 4.317-9.62 9.625-9.62a9.568 9.568 0 019.617 9.618c0 5.302-4.317 9.62-9.625 9.62zm5.338-7.363c-.292-.146-1.73-.855-2-.953-.27-.1-.466-.145-.66.146-.194.292-.758.953-.93 1.146-.17.195-.34.218-.63.073-.292-.145-1.233-.454-2.35-1.447-.869-.775-1.458-1.73-1.63-2.022-.17-.292-.018-.449.13-.594.134-.132.292-.34.438-.51.147-.17.195-.292.293-.485.097-.194.048-.364-.024-.51-.072-.146-.66-1.598-.903-2.183-.237-.57-.476-.494-.66-.504-.17-.01-.365-.012-.56-.012-.194 0-.507.073-.772.365-.266.292-1.011.987-1.011 2.408 0 1.42 1.036 2.79 1.18 2.987.145.195 2.03 3.104 4.917 4.35.688.296 1.226.474 1.643.607.69.22 1.32.19 1.82.116.556-.083 1.73-.704 1.98-1.386.243-.682.243-1.265.17-1.386-.072-.12-.266-.195-.558-.34z"
        />
      </svg>
    </a>
    <a href="mailto:someone@example.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6h-6 w-6 text-red-500 hover:text-red-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 13.5l11.99-8.99H.01L12 13.5zM12 15.5l-12-9v14h24v-14l-12 9z"
        />
      </svg>
    </a>
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
