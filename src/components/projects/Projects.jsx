import React from 'react';

const Projects = ({ data }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {Object.keys(data).map((key) => (
        <div key={data[key].id} className="projectContainer">
          <p style={{ color: data[key].nameColor }} className="projectName">
            {data[key].name}
          </p>
          <p className="projectsDescription">{data[key].description}</p>
          <img
            alt={data[key].name}
            src={data[key].image}
            className="mb-5 w-100"
          />
          <button className="transparentBtn">More</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
