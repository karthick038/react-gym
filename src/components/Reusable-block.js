import React, { useState  } from "react";
import Runspinner from "../assets/run-spinner.gif";

const DynamicBlock = ({ backgrounds, children }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);  // Image load or not check
  const imageUrl = backgrounds.find(bckimg => bckimg.startsWith('url'));  // checks the background with url
  const handleImageLoad = () => {setIsImageLoaded(true); }; // Image load controller

  return (
      <div className="dynamic-block" style={{ backgroundImage : isImageLoaded ? backgrounds : 'none' }}>
          {!isImageLoaded && 
          <div className="loading-text" style={{ textAlign : "center"}}>
          <img src={`${Runspinner}`} alt = 'loader' style={{ width : "100px" }}
          />
      </div>}

        {imageUrl && 
          <img src={imageUrl.slice(4, -1)} alt="background" style={{ display: 'none' }} onLoad={handleImageLoad} />
        }

        {isImageLoaded && (
          <div className="block-content" style={{ background : "red" }}>
            {children}
          </div>
        )}
    </div>
  );
};


const trainingClasses = [
  { id: 1, title: "First Training Class", description: "Phasellus convallis mauris sed elementum...", image: "first-training.jpg" },
  { id: 2, title: "Second Training Class", description: "Donec posuere leo sed dui...", image: "second-training.jpg" },
  { id: 3, title: "Third Training Class", description: "Sed suscipit suscipit erat...", image: "third-training.jpg" },
  { id: 4, title: "Fourth Training Class", description: "Morbi quis erat imperdiet...", image: "fourth-training.jpg" }
];

const TrainingSchedule = () => {
  const [selectedClass, setSelectedClass] = useState(trainingClasses[0]);

  const handleClassClick = (trainingClassParam) => {
    setSelectedClass(trainingClassParam);
  };

  return (
    <div className="schedule-container">
      <div className="training-list">
        {trainingClasses.map((trainingClassParam) => (
          <div 
            key={trainingClassParam.id} 
            className={`training-item ${selectedClass.id === trainingClassParam.id ? 'active' : ''}` }
            onClick={() => { handleClassClick(trainingClassParam); } }
          >
            {trainingClassParam.title}
          </div>
        ))}
        <button className="view-all-btn">View All Schedules</button>
      </div>

      <div className="training-detail">
        { console.log(selectedClass)}
        <img src={selectedClass.image} alt={selectedClass.title} className="training-image" />
        <h2>{selectedClass.title}</h2>
        <p>{selectedClass.description}</p>
        <button className="view-schedule-btn">View Schedule</button>
      </div>
    </div>
  );
};

export { DynamicBlock , TrainingSchedule};