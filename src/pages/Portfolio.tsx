import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Portfolio</h1>
      
      <div className="row">
        {/* Example of Portfolio Item */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/350x200"
              className="card-img-top"
              alt="Portfolio Item"
            />
            <div className="card-body">
              <h5 className="card-title">Project Title</h5>
              <p className="card-text">
                A brief description of the project, highlighting the key features
                and technologies used.
              </p>
              <a href="#" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Repeat for other portfolio items */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/350x200"
              className="card-img-top"
              alt="Portfolio Item"
            />
            <div className="card-body">
              <h5 className="card-title">Project Title</h5>
              <p className="card-text">
                A brief description of the project, highlighting the key features
                and technologies used.
              </p>
              <a href="#" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* More Portfolio items */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/350x200"
              className="card-img-top"
              alt="Portfolio Item"
            />
            <div className="card-body">
              <h5 className="card-title">Project Title</h5>
              <p className="card-text">
                A brief description of the project, highlighting the key features
                and technologies used.
              </p>
              <a href="#" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
