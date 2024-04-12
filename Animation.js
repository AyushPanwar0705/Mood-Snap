import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <button onClick={toggleVisibility}>Toggle Animation</button>
      <div className={`box ${isVisible ? 'visible' : ''}`}></div>
    </div>
  );
}

export default App;

function App() {
    const [isVisible,setISVisible] = usestate(false);
    const toggleVisibility = () => {
        setIsVIsible(!isVisible);
    };
    return (
        <div className="container">
            <button onClick ={toggleVisibility}>Toggle Animation</button>
            <div className={`box ${isVisible ? 'visible' : ''}`}></div>
        </div>
    )
}
