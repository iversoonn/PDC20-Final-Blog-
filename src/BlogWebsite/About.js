export default function About() {
  return (
    <div className="container text-center my-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">About Us</h2>
        <p className="mb-5">
          We’re excited to have you here! This blog is the result of a passionate team dedicated to bringing you high-quality content on a variety of topics.
          Our goal is to provide engaging, informative, and thought-provoking articles that spark curiosity and foster learning. 
          We hope you enjoy exploring our posts, and we look forward to creating a space where ideas and insights thrive!
        </p>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Earl Gabriel C. Datu"
              />
              <div className="card-body">
                <h5 className="card-title">Earl Gabriel C. Datu</h5>
                <p className="card-text">Lead Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Iverson S. David"
              />
              <div className="card-body">
                <h5 className="card-title">Iverson S. David</h5>
                <p className="card-text">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
