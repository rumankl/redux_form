// src/App.js
import React, { useState, useEffect } from 'react';
import Popup from './Popup';


const DisplayPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closePopup = () => setIsOpen(false);
    
////useEffect not write also be fine but you can change const [isOpen, setIsOpen] = useState(true).
    useEffect(() => {

      //clearTimeout(timer) stops the timer set by setTimeout, preventing the delayed function from executing.

      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); 

         // Cleanup function to clear the timeout if the component unmounts
    // return () => clearTimeout(timer); 

    }, []);// Empty dependency array means this effect runs only once after the initial render

    return (
        <div className="bg-black">
            <Popup open={isOpen} onClose={closePopup} />
        </div>
    );
};

export default DisplayPopup;
