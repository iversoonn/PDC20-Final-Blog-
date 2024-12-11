import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import { useState } from 'react';
import one from '../one.jpeg';
import two from '../two.webp';
import three from '../three.jpeg';
import four from '../four.jpeg';
import five from '../five.webp';
import six from '../six.jpeg';


export default function Home() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const images = [one, two, three, four, five, six];
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <div className="home">
      {/* Top Bar Section */}
      <div className="top-bar text-center">
        <span className="top-bar-text">A FOOD BLOG</span>
      </div>

      {/* Lovely Little Things Section */}
      <div className="little-things text-center">
        <h2 className="little-things-title">Lovely Little Things</h2>
      </div>

      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay">
          <h1 className="display-4 mb-4">Delicious Food Stories</h1>
          <p className="lead">
            Dive into the world of food! Discover delicious recipes, learn cooking tips, and stay updated with the latest food trends.
          </p>
          <button
            className="btn btn-success btn-lg mt-3"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container card-section mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="custom-card shadow">
              <img
                src="https://images.pexels.com/photos/833109/pexels-photo-833109.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Lifestyle"
                className="custom-card-img"
              />
              <div className="custom-card-content">
                <h5 className="custom-card-title">Food Recipes</h5>
                <p>Click here to explore delicious recipes.</p>
                <span className="divider"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card shadow">
              <img
                src="https://images.pexels.com/photos/8581015/pexels-photo-8581015.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Family"
                className="custom-card-img"
              />
              <div className="custom-card-content">
                <h5 className="custom-card-title">Food Tips</h5>
                <p>Click here to read more about Food Tips.</p>
                <span className="divider"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card shadow">
              <img
                src="https://images.pexels.com/photos/7552371/pexels-photo-7552371.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Food"
                className="custom-card-img"
              />
              <div className="custom-card-content">
                <h5 className="custom-card-title">Food Reviews</h5>
                <p>Click here to explore Food Reviews.</p>
                <span className="divider"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          Follow us on Instagram!</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ cursor: 'pointer', height: '400px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="modal-overlay show"
          tabIndex="-1"
          role="dialog"
          onClick={closeModal}
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body text-center p-0">
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}