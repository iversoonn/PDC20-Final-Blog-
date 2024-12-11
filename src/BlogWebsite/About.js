import React from "react";
import "../About.css";
import videoSrc from '../vid.mp4';

const About = () => {
  return (
    <div className="about-container">

      <section className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <h1>About us</h1>
            <p>
              Welcome to our food haven! Here at <strong>Delicious Bites Blog</strong>, we’re passionate about all things food—exploring flavors, sharing recipes, and bringing culinary inspiration to your kitchen. Whether you’re a seasoned chef or just starting your cooking journey, we’ve got something special for you.
            </p>
            <p>
              Our mission is to celebrate the art of cooking, showcase diverse cuisines, and help you create mouthwatering dishes that bring joy to your table. Let’s savor the magic of food, one bite at a time!
            </p>
          </div>
          <div className="intro-image">
            <img
              src="https://images.pexels.com/photos/28286256/pexels-photo-28286256/free-photo-of-vegan-porridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Replace with your image URL
              alt="About us"
            />
          </div>
        </div>
      </section>

      <section className="images-section">
        <div className="images-grid">
          <img src="https://images.pexels.com/photos/5491322/pexels-photo-5491322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 1" />
          <img src="https://images.pexels.com/photos/4827131/pexels-photo-4827131.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 2" />
          <img src="https://images.pexels.com/photos/12673631/pexels-photo-12673631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 3" />
          <img src="https://images.pexels.com/photos/6481579/pexels-photo-6481579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team 4" />
        </div>
      </section>

      <section className="content-section">
        <h2>Your Culinary Ideas, Perfectly Delivered</h2>
        <p>
          At <strong>Delicious Bites Blog</strong>, we believe every recipe is a story waiting to be shared. From bold culinary experiments to cherished family traditions, we’re here to bring your ideas to life with flavor and flair.
        </p>
        <p>
          Whether it’s mastering the perfect sourdough, discovering global cuisines, or creating irresistible desserts, we provide the inspiration and tips you need to succeed. Your kitchen is your canvas, and we’re here to guide your every masterpiece.
        </p>
        <p>
          Let’s turn your passion for food into unforgettable experiences that bring people together. After all, the best memories are made around the table!
        </p>
      </section>

      <section className="founder-section">
        <video
          src={videoSrc}
          controls
          loop
          style={{ maxWidth: '60%', borderRadius: '10px' }}
        >
          Your browser does not support the video tag. Please download the video to view it.
        </video>
        <div className="founder-text">
          <blockquote>"Making an impact, together"</blockquote>
          <p className="founder-name">- Socially Founder</p>
        </div>
      </section>

      <section className="growth-section">
        <h2>We Help Your Culinary Creations Grow</h2>
        <p>
          At <strong>Delicious Bites Blog</strong>, we empower food enthusiasts to turn their passion into something extraordinary. Whether you're perfecting recipes, starting a food blog, or exploring the culinary world, we provide the tips and tools to help you grow.
        </p>
        <p>
          From creative recipe ideas to marketing strategies for your food ventures, we’re here to help you achieve your goals faster and bigger. Let’s take your culinary dreams to new heights!
        </p>
      </section>

    </div>
  );
};

export default About;
